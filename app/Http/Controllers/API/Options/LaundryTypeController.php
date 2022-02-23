<?php

namespace App\Http\Controllers\API\Options;

use App\Http\Controllers\Controller;
use App\Http\Resources\LaundryType\LaundryTypeCollection;
use App\Models\LaundryType;
use Illuminate\Http\Request;

class LaundryTypeController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $types = LaundryType::select('id', 'name')->get();
        return new LaundryTypeCollection($types);
    }
}
