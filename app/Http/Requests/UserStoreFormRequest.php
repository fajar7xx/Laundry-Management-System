<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class UserStoreFormRequest extends FormRequest
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
            'name'      => ['required', 'string', 'min:5'],
            'email'     => ['required', 'email', 'unique:users,email'],
            'password'  => ['required', 'string', Password::min(8)->letters()->numbers()],
            'outlet_id' => ['required', 'exists:outlets,id'],
            'photo'     => ['nullable', 'image', 'max:512']
        ];
    }
}
