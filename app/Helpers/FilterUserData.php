<?php
namespace App\Helpers;
use DB;
use Carbon\Carbon;

class FilterUserData {
    public static function activeUser() {
        $res = DB::table('users')
        ->select('users.*')
        ->where('updatedAt', '>', Carbon::now()->subDays(30))
        ->orderBy('createdAt', 'desc')
        ->get();
        return $res;
    }
    public static function iddleUser() {
        $res = DB::table('users')
        ->select('users.*')
        ->whereBetween('updatedAt', [Carbon::now()->subDays(90), Carbon::now()->subDays(30)])
        ->orderBy('createdAt', 'desc')
        ->get();
        return $res;
    }
    public static function nonActiveUser() {
        $res = DB::table('users')
        ->select('users.*')
        ->where('updatedAt','<', Carbon::now()->subDays(90))
        ->orderBy('createdAt', 'desc')
        ->get();
        return $res;
    }
    public static function bannedUser() {
        $res = DB::table('users')
        ->select('users.*')
        ->where('status_banned', true)
        ->orderBy('createdAt', 'desc')
        ->get();
        return $res;
    }

    public static function percentData() {
        $all = DB::table('users')->count();
        $active = intval((DB::table('users')->where('updatedAt', '>', Carbon::now()->subDays(30))->count()/$all)*100);
        $iddle = intval((DB::table('users')->whereBetween('updatedAt', [Carbon::now()->subDays(90), Carbon::now()->subDays(30)])->count()/$all)*100);
        $nonactive = intval((DB::table('users')->where('updatedAt','<', Carbon::now()->subDays(90))->count()/$all)*100);
        $banned = intval((DB::table('users')->where('status_banned', true)->count()/$all)*100);
        $data = [
            'active' => $active,
            'iddle' => $iddle,
            'nonactive' => $nonactive,
            'banned' => $banned
        ];
        return $data;
    }

    public static function countData() {
        $all = DB::table('users')->count();
        $active = DB::table('users')->where('updatedAt', '>', Carbon::now()->subDays(30))->count();
        $iddle = DB::table('users')->whereBetween('updatedAt', [Carbon::now()->subDays(90), Carbon::now()->subDays(30)])->count();
        $nonactive = DB::table('users')->where('updatedAt','<', Carbon::now()->subDays(90))->count();
        $banned = DB::table('users')->where('status_banned', true)->count();
        $data = [
            'all' => $all,
            'active' => $active,
            'iddle' => $iddle,
            'nonactive' => $nonactive,
            'banned' => $banned
        ];
        return $data;
    }
}