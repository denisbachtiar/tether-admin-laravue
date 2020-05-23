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

    public static function allGraphDays() {
      $y =[];
      for ($x = 6; $x >= 0; $x--) {
          $all = DB::table('users')
          ->whereDate('createdAt', Carbon::now()->subDays($x))
          ->count();
  
          $y[] = array_merge(array($all));
        }

      return $y;
    }

    public static function iddleGraphDays() {
      $y =[];
      for ($x = 6; $x >= 0; $x--) {
          $iddle = DB::table('users')
          ->whereDate('createdAt', Carbon::now()->subDays($x))
          ->whereBetween('updatedAt', [Carbon::now()->subDays(90), Carbon::now()->subDays(30)])
          ->count();
  
          $y[] = array_merge(array($iddle));
        }

      return $y;
    }

    public static function activeGraphDays() {
      $y =[];
      for ($x = 6; $x >= 0; $x--) {
          $active = DB::table('users')
          ->whereDate('createdAt', Carbon::now()->subDays($x))
          ->where('updatedAt', '>', Carbon::now()->subDays(30))
          ->count();
  
          $y[] = array_merge(array($active));
        }

      return $y;
    }

    public static function nonactiveGraphDays() {
      $y =[];
      for ($x = 6; $x >= 0; $x--) {
          $nonactive = DB::table('users')
          ->whereDate('createdAt', Carbon::now()->subDays($x))
          ->where('updatedAt','<', Carbon::now()->subDays(90))
          ->count();
  
          $y[] = array_merge(array($nonactive));
        }

      return $y;
    }
}