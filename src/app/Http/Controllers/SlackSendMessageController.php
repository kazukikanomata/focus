<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class SlackSendMessageController extends Controller
{
    function sendMessage(){
        $webhookurl = config('services.slack.slack_url');

        $response = Http::post($webhookurl,[
            'text' => 'Hello World!',
        ]);
        return $response->successful();
    }
}