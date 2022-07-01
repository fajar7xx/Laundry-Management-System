<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class LaundryPrice extends Model
{
    use HasFactory;
    protected $table  = 'laundry_prices';
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
        'price'           => 'integer'
    ];

    // limit data perpage
    protected $perPage = 10;

    // relationship
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function laundryType(): BelongsTo
    {
        return $this->belongsTo(LaundryType::class, 'laundry_type_id', 'id');
    }
}
