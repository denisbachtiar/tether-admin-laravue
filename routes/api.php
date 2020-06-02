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

Route::get('/dashboard', 'DashboardController@index')->name('dashboard');

Route::post('/login', 'VueController@login')->name('login');

Route::get('/dashboard/allgraphbox', 'DashboardController@allGraphBox')->name('dashboard.allgraphbox');
Route::get('/dashboard/activegraphbox', 'DashboardController@activeGraphBox')->name('dashboard.activegraphbox');
Route::get('/dashboard/iddlegraphbox', 'DashboardController@iddleGraphBox')->name('dashboard.iddlegraphbox');
Route::get('/dashboard/nonactivegraphbox', 'DashboardController@nonActiveGraphBox')->name('dashboard.nonactivegraphbox');

Route::get('/dashboard/graphmonth', 'DashboardController@graph')->name('dashboard.graph');
Route::get('/dashboard/graphagepie', 'DashboardController@graphAgePie')->name('dashboard.graph.age.pie');
Route::get('/datauser', 'UsersController@show')->name('usersdata');
