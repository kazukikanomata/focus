<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    public function getLists(){
        $categories = Category::orderBy('id', 'asc')->pluck('name','id');
        return $categories;
    }

    public function tasks(){
        return $this->hasMany(Task::class);
    }
}
