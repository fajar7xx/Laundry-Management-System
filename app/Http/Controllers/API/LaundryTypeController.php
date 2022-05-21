<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\LaundryType\LaundryTypeStoreRequest;
use App\Http\Resources\LaundryType\LaundryTypeCollection;
use App\Http\Resources\LaundryType\LaundryTypeResource;
use App\Models\LaundryType;
use Illuminate\Http\Request;

class LaundryTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $type = LaundryType::select('id', 'name')->orderBy('name', 'ASC')->get();
        return new LaundryTypeCollection($type);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(LaundryTypeStoreRequest $request)
    {
        $type = LaundryType::create([
            'name' => $request->name
        ]);

        return new LaundryTypeResource($type);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\LaundryType  $laundryType
     * @return \Illuminate\Http\Response
     */
    public function show(LaundryType $laundryType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\LaundryType  $laundryType
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, LaundryType $laundryType)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\LaundryType  $laundryType
     * @return \Illuminate\Http\Response
     */
    public function destroy(LaundryType $laundryType)
    {
        //
    }
}
