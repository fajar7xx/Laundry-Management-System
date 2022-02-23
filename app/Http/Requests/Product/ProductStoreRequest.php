<?php

namespace App\Http\Requests\Product;

use Illuminate\Foundation\Http\FormRequest;

class ProductStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'            => ['required', 'string', 'max:100'],
            'unit_type'       => ['required'],
            'price'           => ['required', 'integer'],
            'laundry_type_id' => ['required']
        ];
    }

    public function attributes()
    {
        return [
            'laundry_type_id' => 'Laundry Type'
        ];
    }
}
