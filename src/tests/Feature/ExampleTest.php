<?php

namespace Tests\Feature;

use Tests\TestCase;

class ExampleTest extends TestCase {

    // public function setUp(): void
    // {
    //     parent::setUp();
    //     dump('setup');
    // }

    // public function tearDown(): void
    // {
    //     dump('tearDown');

    //     parent::tearDown();
    // }

    public function test_sample(): void
    {
        $response = $this->get('/');

        dump(config('session.lifetime'));
        config(['session.lifetime' => 10]);
        dump(config('session.lifetime'));
    
        $response->assertStatus(200);
    }

    public function test_sample2():void
    {
        $response = $this->get('/');

        dump('sample2');
        dump(config('session.lifetime'));

        $response->assertStatus(200);

    }
}

