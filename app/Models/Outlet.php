<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Outlet extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = 'outlets';
    protected $fillable = [
        'code',
        'name',
        'status',
        'address',
        'phone'
    ];
    protected $perPage = 10;
}
