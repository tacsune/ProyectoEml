<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/usuarios/mostrar', 'App\Http\Controllers\UsuariosController@index'); //mostrar todos los usuarios

Route::post('/usuarios/registrar', 'App\Http\Controllers\UsuariosController@store'); //Resgistrar usuario

Route::put('/usuarios/actualizar/{id}', 'App\Http\Controllers\UsuariosController@update'); //Actualizar usuario

Route::delete('/usuarios/eliminar/{id}', 'App\Http\Controllers\UsuariosController@destroy'); //Eliminar usuario

