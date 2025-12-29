<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

// App\Models\Video.php


class Video extends Model
{
    use HasFactory;

    protected $fillable = ['video'];

    protected $appends = ['video_url'];

    public function getVideoUrlAttribute()
    {
        return $this->video
            ? asset('storage/' . $this->video)
            : null;
    }
}
