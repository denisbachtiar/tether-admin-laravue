<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Activities;

class ActivityDataController extends Controller
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
    public function show(Request $request)
    {
        // $data = DB::table('activities')
        // ->join('users','users.user_id','=','activities.author_id')
        // ->join('activity_images','activity_images.activity_id','=','activities.activity_id')
        // ->select('activities.*','users.username','activity_images.image')
        // ->where("activities.title", "LIKE", "%$request->search%")
        // ->orderBy('activities.createdAt')
        // ->paginate(10);
        $data = Activities::with('images')
        ->join('users','users.user_id','=','activities.author_id')
        ->select('activities.*','users.username')
        ->where("activities.title", "LIKE", "%$request->search%")
        ->orderBy('activities.createdAt')
        ->paginate(10);
        return response()->json($data);
    }

    public function updateStatus(Request $request)
    {
        DB::table('activities')->where('activity_id', $request->id)->update(['active' => $request->value]);
        return response()->json(['success' => true]);
    }

    public function showBanners(Request $request)
    {
        $data = DB::table('banners')
        ->select('banners.*')
        ->where("banners.name", "LIKE", "%$request->search%")
        ->orderBy('banners.createdAt')
        ->paginate(2);
        return response()->json($data);
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
