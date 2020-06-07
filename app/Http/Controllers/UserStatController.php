<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Helpers\UsersReport;
use App\Helpers\FilterUserData;
use App\Helpers\FilterGender;
use App\Helpers\FilterAge;

class UserStatController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    public function boxStat()
    {
        $allcount = FilterUserData::countData();
        return response()->json($allcount);
    }

    public function dailyGraphGender()
    {
        return response()->json(FilterGender::graphDays());
    }

    public function weeklyGraphGender()
    {
        return response()->json(FilterGender::graphWeek());
    }

    public function pieGraphGender()
    {
        return response()->json(FilterGender::count());
    }

    public function graph()
    {
        return response()->json(FilterGender::graphMonth());
    }

    //AGE STAT

    public function dailyGraphAge()
    {
        return response()->json(FilterAge::graphDays());
    }

    public function weeklyGraphAge()
    {
        return response()->json(FilterAge::graphWeek());
    }

    public function monthlyGraphAge()
    {
        return response()->json(FilterAge::graphMonth());
    }

    public function graphAgePie()
    {
        return response()->json(FilterAge::percentData());
    }

    public function graphBox()
    {
        return response()->json(FilterUserData::allGraphDays());
    }

    public function allGraphBox()
    {
        return response()->json(UsersReport::allGraphDays());
    }

    public function activeGraphBox()
    {
        return response()->json(UsersReport::activeGraphDays());
    }

    public function iddleGraphBox()
    {
        return response()->json(UsersReport::iddleGraphDays());
    }

    public function nonActiveGraphBox()
    {
        return response()->json(UsersReport::nonactiveGraphDays());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
