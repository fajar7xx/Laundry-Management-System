<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class LaundryType extends Model
{
    use HasFactory;
    protected $table = 'laundry_types';
    protected $fillable = [
        'name'
    ];

    public function laundryPrice(): HasMany
    {
        return $this->hasMany(LaundryPrice::class, 'laundry_type_id');
    }
}
