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
Route::get('/dashboard/graphbox', 'DashboardController@graphBox')->name('dashboard.graphbox');
Route::get('/dashboard/graphmonth', 'DashboardController@graph')->name('dashboard.graph');
Route::get('/dashboard/graphagepie', 'DashboardController@graphAgePie')->name('dashboard.graph.age.pie');
Route::get('/datauser', 'UsersController@show')->name('usersdata');
