<?php

namespace App\Http\Controllers;

use App\Services\GoogleCalendarService;

class GoogleApiCalendarController extends Controller
{
    public function index(GoogleCalendarService $googleCalendar)
    {
        $events = $googleCalendar->getUpcomingEvents();

        return view('calendar.index', compact('events'));
    }
}
