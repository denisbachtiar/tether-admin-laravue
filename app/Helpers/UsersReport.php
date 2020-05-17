<?php
namespace App\Helpers;
use DB;
use Carbon\Carbon;

class UsersReport {
    public static function yearData() {
        $y =[];
        for ($x = 1; $x <= 12; $x++) {
           $a = DB::table('users')
            ->whereMonth('createdAt', '=', date('m', strtotime(Carbon::now()->month($x))))
            ->count();
            $b = DB::table('activities')
            ->whereMonth('createdAt', '=', date('m', strtotime(Carbon::now()->month($x))))
            ->count();

            $y[] = array_merge(array($a),array($b));
          }
        return $y;
    }
}