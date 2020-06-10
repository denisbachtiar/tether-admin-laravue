<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Activities extends Model
{
    protected $table = 'activities';
    protected $primaryKey = 'activity_id';

    public function images()
    {
        return $this->hasMany('App\ActivityImages','activity_id','activity_id');
    }
}
