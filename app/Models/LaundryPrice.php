<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LaundryPrice extends Model
{
    use HasFactory;
    protected $table  = 'laundry_price';
    protected $fillable = [
        'name',
        'unit_type',
        'price',
        'laundry_type_id',
        'user_id',
    ];
    protected $casts = [
        'laundry_type_id' => 'integer',
        'user_id'         => 'integer',
        'price'           => 'decimal,2'
    ];

    // limit data perpage
    protected $perPage = 10;

    // relationship
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function laundryType()
    {
        return $this->belongsTo(LaundryType::class, 'laundry_type_id', 'id');
    }
}
