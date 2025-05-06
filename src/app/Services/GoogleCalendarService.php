<?php

namespace App\Services;

use Google_Client;
use Google_Service_Calendar;

class GoogleCalendarService
{
    protected Google_Service_Calendar $calendarService;

    protected string $calendarId;

    public function __construct()
    {
        $client = new Google_Client;
        $client->setAuthConfig(base_path(config('services.google.credentials_path')));
        $client->addScope(Google_Service_Calendar::CALENDAR_READONLY);

        $this->calendarService = new Google_Service_Calendar($client);
        $this->calendarId = config('services.google.client_calendar_id');
    }

    public function getUpcomingEvents(int $maxResults = 10)
    {
        $params = [
            'maxResults' => $maxResults,
            'orderBy' => 'startTime',
            'singleEvents' => true,
            'timeMin' => now()->toRfc3339String(),
        ];

        $events = $this->calendarService->events->listEvents($this->calendarId, $params);

        return $events->getItems();
    }
}
