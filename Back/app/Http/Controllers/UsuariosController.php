<?php

namespace App\Http\Controllers;

use App\Models\Usuarios;
use Illuminate\Http\Request;

class UsuariosController extends Controller
{
    

    public function index() //mostrar todos los usuarios
    {
        $usuarios = Usuarios::all()->sortBy('nombres');
        return $usuarios;
    }

   
    public function store(Request $request) //Registrar usuario
    {
        $usuarios = new Usuarios();
        $usuarios->nombres = $request->nombres;
        $usuarios->apellidos = $request->apellidos;
        $usuarios->telefono = $request->telefono;
        $usuarios->email = $request->email;

        $usuarios->save();
        return $usuarios;

    }

    
    public function update(Request $request) //Actualizar
    {
        $usuarios = Usuarios::findOrFail($request->id);
        $usuarios->nombres = $request->nombres;
        $usuarios->apellidos = $request->apellidos;
        $usuarios->telefono = $request->telefono;
        $usuarios->email = $request->email;

        $usuarios->save();

        return $usuarios;

    }

    public function destroy(Request $request) //eliminar usuario
    {
        $usuarios = Usuarios::destroy($request->id);
        return $usuarios;
    }
}
