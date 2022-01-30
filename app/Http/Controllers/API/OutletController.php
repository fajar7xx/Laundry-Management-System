<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\OutletStoreFormRequest;
use App\Http\Resources\OutletCollection;
use App\Http\Resources\OutletResource;
use App\Models\Outlet;
use Illuminate\Http\Request;

class OutletController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $search = $request->q;
        $wildSearch = "%$search%";

        $query = Outlet::query();
        $query->when($search, function ($q) use ($wildSearch) {
            $q->where('name', 'LIKE', $wildSearch);
        });

        $outlets = $query->paginate();
        return new OutletCollection($outlets);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(OutletStoreFormRequest $request)
    {
        $outlet = Outlet::create([
            'code'    => $request->code,
            'name'    => $request->name,
            'status'  => $request->status,
            'address' => $request->address,
            'phone'   => $request->phone
        ]);

        return new OutletResource($outlet);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
