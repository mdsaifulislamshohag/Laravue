<?php

use Illuminate\Http\Request;

Route::group([
    'middleware' => 'auth:api'
], function () {
    Route::get('logout', 'AppController@logout');
    Route::get('user', 'AppController@user');
});


Route::post('/register', 'AppController@register');
Route::post('/login', 'AppController@login');
