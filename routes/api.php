<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', 'VueController@login')->name('login');

// USER STAT
Route::get('/user/boxstat', 'UserStatController@boxStat');
Route::get('/user/allgraphbox', 'UserStatController@allGraphBox');
Route::get('/user/activegraphbox', 'UserStatController@activeGraphBox');
Route::get('/user/iddlegraphbox', 'UserStatController@iddleGraphBox');
Route::get('/user/nonactivegraphbox', 'UserStatController@nonActiveGraphBox');
Route::get('/user/dailygraphgender', 'UserStatController@dailyGraphGender');
Route::get('/user/weeklygraphgender', 'UserStatController@weeklyGraphGender');
Route::get('/user/monthlygraph', 'UserStatController@graph');
Route::get('/user/piegraphgender', 'UserStatController@pieGraphGender');
Route::get('/user/agegraphpie', 'UserStatController@graphAgePie');

// USER DATA
Route::get('/user/datauser', 'UsersController@show')->name('usersdata');

// ACTIVITY STAT
Route::get('/activity/boxstatcount', 'ActivityStatController@boxStat');
Route::get('/activity/listcity', 'ActivityStatController@listCity');
Route::get('/activity/monthlygraph', 'ActivityStatController@monthlyGraph');
