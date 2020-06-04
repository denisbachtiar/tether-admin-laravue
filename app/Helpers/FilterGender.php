<?php
namespace App\Helpers;
use DB;
use Carbon\Carbon;

class FilterGender {
    public static function all() {
        $res = DB::table('users')
        ->select('users.*')
        ->orderBy('createdAt', 'desc')
        ->get();
        return $res;
    }
    public static function male() {
        $res = DB::table('users')
        ->select('users.*')
        ->where('gender', 'm')
        ->orderBy('createdAt', 'desc')
        ->get();
        return $res;
    }
    public static function female() {
        $res = DB::table('users')
        ->select('users.*')
        ->where('gender', 'f')
        ->orderBy('createdAt', 'desc')
        ->get();
        return $res;
    }
    public static function undefined() {
        $res = DB::table('users')
        ->select('users.*')
        ->where('gender', '')
        ->orderBy('createdAt', 'desc')
        ->get();
        return $res;
    }
    public static function percentData() {
        $all = DB::table('users')->count();
        $male = intval((DB::table('users')->where('gender', 'm')->count()/$all)*100);
        $female = intval((DB::table('users')->where('gender', 'f')->count()/$all)*100);
        $undefined = intval((DB::table('users')->where('gender', '')->count()/$all)*100);
        $data = [
            'male' => $male,
            'female' => $female,
            'undefined' => $undefined
        ];
        return $data;
    }
    public static function graphDays() {
        $y =[];
        for ($x = 6; $x >= 0; $x--) {
            $male = DB::table('users')
            ->whereDate('createdAt', date('Y-m-d', strtotime(Carbon::now()->subDays($x))))
            ->where('gender', 'm')
            ->count();
            $female = DB::table('users')
            ->whereDate('createdAt', '=', Carbon::now()->subDays($x))
            ->where('gender', 'f')
            ->count();
            $undefined = DB::table('users')
            ->whereDate('createdAt', '=', Carbon::now()->subDays($x))
            ->where('gender', '')
            ->count();

            $y[] = array_merge(array($male),array($female),array($undefined));
          }
        return $y;
    }

    public static function graphWeek() {
        $y =[];
        for ($x = 6; $x >= 0; $x--) {
            $male = DB::table('users')
            ->whereBetween('createdAt', [Carbon::now()->subWeek($x+1), Carbon::now()->subWeek($x)])
            ->where('gender', 'm')
            ->count();
            $female = DB::table('users')
            ->whereBetween('createdAt', [Carbon::now()->subWeek($x+1), Carbon::now()->subWeek($x)])
            ->where('gender', 'f')
            ->count();
            $undefined = DB::table('users')
            ->whereBetween('createdAt', [Carbon::now()->subWeek($x+1), Carbon::now()->subWeek($x)])
            ->where('gender', '')
            ->count();

            $y[] = array_merge(array($male),array($female),array($undefined));
          }
        return $y;
    }

    public static function graphMonth() {
        $maleData = [];
        $femaleData = [];
        $undefinedData= [];
        $dateData= [];
        for ($x = 6; $x >= 0; $x--) {
            $male = DB::table('users')
            ->whereMonth('createdAt', Carbon::now()->subMonth($x)->format('m'))
            ->where('gender', 'm')
            ->count();
            $female = DB::table('users')
            ->whereMonth('createdAt', Carbon::now()->subMonth($x)->format('m'))
            ->where('gender', 'f')
            ->count();
            $undefined = DB::table('users')
            ->whereMonth('createdAt', Carbon::now()->subMonth($x)->format('m'))
            ->where('gender', '')
            ->count();
            $date = Carbon::now()->subMonth($x)->format('Y M');
            array_push($maleData, $male);
            array_push($femaleData, $female);
            array_push($undefinedData, $undefined);
            array_push($dateData, $date);
          }
          $t = array_merge(array($maleData), array($femaleData), array($undefinedData), array($dateData));
        return $t;
    }

    public static function count() {
        $male = DB::table('users')->where('gender', 'm')->count();
        $female = DB::table('users')->where('gender', 'f')->count();
        $undefined = DB::table('users')->where('gender', '')->count();
        $data = [[
            'male' => $male,
            'female' => $female,
            'undefined' => $undefined
        ]];
        return $data;
    }
}