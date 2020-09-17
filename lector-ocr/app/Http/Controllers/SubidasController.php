<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SubidasController extends Controller
{
    public function saveFile(Request $request)
    {
        return \view('descifrado');
    }
}
