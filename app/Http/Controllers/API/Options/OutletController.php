<?php

namespace App\Http\Controllers\API\Options;

use App\Http\Controllers\Controller;
use App\Http\Resources\OutletCollection;
use App\Models\Outlet;
use Illuminate\Http\Request;

class OutletController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $outlets = Outlet::select('id', 'name')->get();
        return new OutletCollection($outlets);
    }
}
