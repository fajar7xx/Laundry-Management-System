<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\ProductStoreRequest;
use App\Http\Requests\Product\ProductUpdateRequest;
use App\Http\Resources\Product\ProductCollection;
use App\Http\Resources\Product\ProductResource;
use App\Models\LaundryPrice;
use Illuminate\Http\Request;

class ProductController extends Controller
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

        $query = LaundryPrice::with(['laundyType', 'user']);
        $query->when($search, function ($q) use ($wildSearch) {
            $q->where('name', 'LIKE', $wildSearch);
        });

        $products = $query->paginate();
        return new ProductCollection($products);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProductStoreRequest $request)
    {
        $product = LaundryPrice::create([
            'name' => $request->name,
            'unit_type' => $request->unit_type,
            'laundry_type_id' => $request->laundry_type_id,
            'price' => $request->price,
            'user_id' => \Auth::id()
        ]);

        return new ProductResource($product);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\LaundryPrice  $laundryPrice
     * @return \Illuminate\Http\Response
     */
    public function show(LaundryPrice $product)
    {
        return new ProductResource($product);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\LaundryPrice  $laundryPrice
     * @return \Illuminate\Http\Response
     */
    public function update(ProductUpdateRequest $request, LaundryPrice $product)
    {
        $product->name = $request->name;
        $product->unit_type = $request->unit_type;
        $product->laundry_type_id = $request->laundry_type_id;
        $product->price = $request->price;
        $product->save();

        return new ProductResource($product);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\LaundryPrice  $laundryPrice
     * @return \Illuminate\Http\Response
     */
    public function destroy(LaundryPrice $product)
    {
        $product->delete();
        return new ProductResource($product);
    }
}
