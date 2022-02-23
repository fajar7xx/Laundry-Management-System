<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LaundryType extends Model
{
    use HasFactory;
    protected $table = 'laundry_types';
    protected $fillable = [
        'name'
    ];

    public function laundryPrice()
    {
        return $this->hasMany(LaundryPrice::class, 'laundry_type_id');
    }
}
