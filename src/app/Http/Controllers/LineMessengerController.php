<?php

namespace App\Http\Controllers;

use LINE\LINEBot\HTTPClient\CurlHTTPClient;
use LINE\LINEBot;
use App\Models\User;
use App\Models\Message;
use App\Models\Task;
use LINE\LINEBot\MessageBuilder\TextMessageBuilder;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LineMessengerController extends Controller
{
    public function webhook(Request $request) {
        $data = $request->all();
        $events = $data['events'];

        $message_type = $events[0]['type'];
        
        if ($message_type == 'message'){
            $http_client = new CurlHTTPClient(config('services.line.channel_token'));
            $bot = new LINEBot($http_client, ['channelSecret' => config('services.line.messenger_secret')]);
            
            $reply_token = $events[0]['replyToken'];
            $reply_message = 'メッセージありがとうございます!!!!';
            $reply = $bot->replyText($reply_token, $reply_message);
        }
        foreach($events as $event){
            Message::create([
                'line_user_id' => $event['source']['userId'],
                'line_message_id' => $event['message']['id'],
                'text' => $event['message']['text'],
            ]);
        }
    }

    //     LINEのユーザーには特別にこれ　→ LINEでログインしたユーザーだけが見えたら最高
    //     $line_user_id = Message::select('line_user_id')->get();
    //     $send_user_id = User::where('line_id', $line_user_id)->select('id')->first(); // 送るユーザーの特定

    //    送りたい内容　tasks→user_id→user.id→line_idと同じものを取得
    //     $tasks_select = Task::with('category:name')->where('user_id', $send_user_id)->select('content', 'due_time', 'category_id')->orderby('created_at', 'desc')->get();

    public function index(Request $request) {
        $lineUsers = Message::groupBy('line_user_id')->get('line_user_id');
        return view('message/index', ['lineUsers' => $lineUsers]);
    }

    public function show(Request $request){
        $messages = Message::where('line_user_id', $request->lineUserId)->get();
        $tasks = Task::all();
        return view('message/show', ['tasks' => $tasks,'lineUserId' => $request->lineUserId, 'messages' => $messages]);
    }

    public function create(Request $request){
        Message::create([
            'line_user_id' => $request->lineUserId,
            'text' => $request->message,
        ]);
        $http_client = new CurlHTTPClient(config('services.line.channel_token'));
        $bot = new LINEBot($http_client, ['channelSecret' => config('services.line.messenger_secret')]);
        
        $message = $request->message;
        $content = $request->content;
        $due_time = $request->due_time;
        $category_id = $request->category_id;
        
        $textMessageBuilder = new TextMessageBuilder($message,$content,$due_time,$category_id);
        $response = $bot->pushMessage($request->lineUserId, $textMessageBuilder);

        return redirect(route('message.show', ['lineUserId' => $request->lineUserId]));
    }
}
