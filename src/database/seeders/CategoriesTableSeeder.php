<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $category_names = ['NW', 'NP', 'WW', 'WP'];
        foreach ($category_names as $category_name) {
            $category_info = ['name' => $category_name];
            DB::table('categories')->insert($category_info);
        }
    }
}
