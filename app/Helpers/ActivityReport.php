<?php
namespace App\Helpers;
use DB;
use Carbon\Carbon;

class ActivityReport {
    public static function graphDays() {
      $y =[];
      for ($x = 6; $x >= 0; $x--) {
          $all = DB::table('activities')
          ->whereDate('createdAt', Carbon::now()->subDays($x))
          ->count();

          $existing = DB::table('activities')
          ->whereDate('createdAt', Carbon::now()->subDays($x))
          ->where('date','>', Carbon::now())
          ->count();

          $finish = DB::table('activities')
          ->whereDate('createdAt', Carbon::now()->subDays($x))
          ->where('date','<', Carbon::now())
          ->count();
  
          $y[] = array_merge(array($all), array($existing), array($finish));
        }
      return $y;
    }

    public static function yearData() {
      $all_data= [];
      $existing_data = [];
      $finish_data = [];
      $date_data = [];
      for ($x = 6; $x >= 0; $x--) {
          $all = DB::table('activities')
          ->whereMonth('createdAt', Carbon::now()->subMonth($x)->format('m'))
          ->count();
          $existing = DB::table('activities')
          ->whereMonth('createdAt', Carbon::now()->subMonth($x)->format('m'))
          ->where('date','>', Carbon::now())
          ->count();
          $finish = DB::table('activities')
          ->whereMonth('createdAt', Carbon::now()->subMonth($x)->format('m'))
          ->where('date','<', Carbon::now())
          ->count();
          $date = Carbon::now()->subMonth($x)->format('Y M');

          array_push($all_data, $all);
          array_push($existing_data, $existing);
          array_push($finish_data, $finish);
          array_push($date_data, $date);
        }
        $y = array_merge(array($all_data), array($existing_data), array($finish_data), array($date_data));
      return $y;
    }

    public static function cityMostly() {
      $city = DB::select('SELECT activities.city_id, districts.city_name,
      COUNT(activities.city_id) AS amount
      FROM activities
      INNER JOIN districts ON activities.city_id=districts.city_id
      GROUP BY activities.city_id, districts.city_name
      ORDER BY amount DESC
      LIMIT 7');
      return $city;
    }

    public static function countAll() {
      $all = DB::table('activities')->count();
      $exist = DB::table('activities')->where('date','>', Carbon::now())->count();
      $finish = DB::table('activities')->where('date','<', Carbon::now())->count();
      $data = [
        'all' => $all,
        'exist' => $exist,
        'finish' => $finish,
      ];
      return $data;
    }
}