<?php
namespace App\Helpers;
use DB;
use Carbon\Carbon;

class FilterAge {
    // COUNT
    public static function kids() {
        $res = DB::select('SELECT COUNT(*) FROM (select EXTRACT(year FROM age(current_date,birthdate)) :: int as age from users) as age
        where age < 17');
        return $res;
    }
    public static function adult() {
        $res = DB::select('SELECT COUNT(*) FROM (select EXTRACT(year FROM age(current_date,birthdate)) :: int as age from users) as age
        where age between 17 and 30');
        return $res;
    }
    public static function old() {
        $res = DB::select('SELECT COUNT(*) FROM (select EXTRACT(year FROM age(current_date,birthdate)) :: int as age from users) as age
        where age between 31 and 45');
        return $res;
    }
    public static function elder() {
        $res = DB::select('SELECT COUNT(*) FROM (select EXTRACT(year FROM age(current_date,birthdate)) :: int as age from users) as age
        where age > 46');
        return $res;
    }

    // DATATABLE
    public static function allData() {
        $res = DB::select('SELECT * FROM (select *, EXTRACT(year FROM age(current_date,birthdate)) :: int as age from users) as age');
        return $res;
    }
    public static function kidsData() {
        $res = DB::select('SELECT * FROM (select *, EXTRACT(year FROM age(current_date,birthdate)) :: int as age from users) as age
        where age < 17');
        return $res;
    }
    public static function adultData() {
        $res = DB::select('SELECT * FROM (select *, EXTRACT(year FROM age(current_date,birthdate)) :: int as age from users) as age
        where age between 17 and 30');
        return $res;
    }
    public static function oldData() {
        $res = DB::select('SELECT * FROM (select *, EXTRACT(year FROM age(current_date,birthdate)) :: int as age from users) as age
        where age between 31 and 45');
        return $res;
    }
    public static function elderData() {
        $res = DB::select('SELECT * FROM (select *, EXTRACT(year FROM age(current_date,birthdate)) :: int as age from users) as age
        where age > 46');
        return $res;
    }

    public static function graphDays() {
        $y =[];
        for ($x = 6; $x >= 0; $x--) {
            $t = Carbon::now()->subDays($x);
            $kids = DB::select('SELECT COUNT(*) as kids FROM (select*, EXTRACT(year FROM age(current_date,birthdate)) :: int as age from users) as age 
            where age < 17 AND DATE("createdAt") = :datet', ['datet'=> $t])[0];

            $adult = DB::select('SELECT COUNT(*) as adult FROM (select*, EXTRACT(year FROM age(current_date,birthdate)) :: int as age from users) as age 
            where age between 17 and 30 AND DATE("createdAt") = :datet', ['datet'=> $t])[0];

            $old = DB::select('SELECT COUNT(*) as old FROM (select*, EXTRACT(year FROM age(current_date,birthdate)) :: int as age from users) as age 
            where age between 31 and 45 AND DATE("createdAt") = :datet', ['datet'=> $t])[0];

            $elder = DB::select('SELECT COUNT(*) as elder FROM (select*, EXTRACT(year FROM age(current_date,birthdate)) :: int as age from users) as age 
            where age > 46 AND DATE("createdAt") = :datet', ['datet'=> $t])[0];

            $y[] = array_merge((array)$kids, (array)$adult, (array)$old, (array)$elder);
          }
        return $y;
    }

    public static function graphWeek() {
        $y =[];
        for ($x = 6; $x >= 0; $x--) {
            $kids = DB::select('SELECT COUNT(*) as kids FROM (select*, EXTRACT(year FROM age(current_date,birthdate)) :: int as age from users) as age 
            where (age < 17) AND (DATE("createdAt") between :weekt1 and :weekt2)', ['weekt1'=> Carbon::now()->subWeek($x+1), 'weekt2'=> Carbon::now()->subWeek($x)])[0];

            $adult = DB::select('SELECT COUNT(*) as adult FROM (select*, EXTRACT(year FROM age(current_date,birthdate)) :: int as age from users) as age 
            where (age between 17 and 30) AND (DATE("createdAt") between :weekt3 and :weekt4)', ['weekt3'=> Carbon::now()->subWeek($x+1), 'weekt4'=> Carbon::now()->subWeek($x)])[0];

            $old = DB::select('SELECT COUNT(*) as old FROM (select*, EXTRACT(year FROM age(current_date,birthdate)) :: int as age from users) as age 
            where (age between 31 and 45) AND (DATE("createdAt") between :weekt1 and :weekt2)', ['weekt1'=> Carbon::now()->subWeek($x+1), 'weekt2'=> Carbon::now()->subWeek($x)])[0];

            $elder = DB::select('SELECT COUNT(*) as elder FROM (select*, EXTRACT(year FROM age(current_date,birthdate)) :: int as age from users) as age 
            where (age > 46) AND (DATE("createdAt") between :weekt1 and :weekt2)', ['weekt1'=> Carbon::now()->subWeek($x+1), 'weekt2'=> Carbon::now()->subWeek($x)])[0];

            $y[] = array_merge((array)$kids, (array)$adult, (array)$old, (array)$elder);
          }
        return $y;
    }

    public static function graphMonth() {
        $y =[];
        for ($x = 6; $x >= 0; $x--) {
            $kids = DB::select('SELECT COUNT(*) as kids FROM (select*, EXTRACT(year FROM age(current_date,birthdate)) :: int as age from users) as age 
            where (age < 17) AND (EXTRACT(MONTH from "createdAt") = :montht)', ['montht'=> Carbon::now()->subMonth($x)->format('m')])[0];

            $adult = DB::select('SELECT COUNT(*) as adult FROM (select*, EXTRACT(year FROM age(current_date,birthdate)) :: int as age from users) as age 
            where (age between 17 and 30) AND (EXTRACT(MONTH from "createdAt") = :montht)', ['montht'=> Carbon::now()->subMonth($x)->format('m')])[0];

            $old = DB::select('SELECT COUNT(*) as old FROM (select*, EXTRACT(year FROM age(current_date,birthdate)) :: int as age from users) as age 
            where (age between 31 and 45) AND (EXTRACT(MONTH from "createdAt") = :montht)', ['montht'=> Carbon::now()->subMonth($x)->format('m')])[0];

            $elder = DB::select('SELECT COUNT(*) as elder FROM (select*, EXTRACT(year FROM age(current_date,birthdate)) :: int as age from users) as age 
            where (age > 46) AND (EXTRACT(MONTH from "createdAt") = :montht)', ['montht'=> Carbon::now()->subMonth($x)->format('m')])[0];

            $y[] = array_merge((array)$kids, (array)$adult, (array)$old, (array)$elder);
          }
        return $y;
    }

    public static function percentData() {
        $kids = DB::select('SELECT COUNT(*) FROM (select EXTRACT(year FROM age(current_date,birthdate)) :: int as age from users) as age
        where age < 30')[0]->count;

        $adult = DB::select('SELECT COUNT(*) FROM (select EXTRACT(year FROM age(current_date,birthdate)) :: int as age from users) as age
        where age between 17 and 30')[0]->count;

        $old = DB::select('SELECT COUNT(*) FROM (select EXTRACT(year FROM age(current_date,birthdate)) :: int as age from users) as age
        where age between 31 and 45')[0]->count;

        $elder = DB::select('SELECT COUNT(*) FROM (select EXTRACT(year FROM age(current_date,birthdate)) :: int as age from users) as age
        where age > 46')[0]->count;

        $data = [
            'labels' => ['Kids (>17)', 'Adult (17-30)', 'Old (31-45)', 'Elder (>45)'],
            'data' => [$kids, $adult, $old, $elder]
        ];
        
        return $data;
    }
}