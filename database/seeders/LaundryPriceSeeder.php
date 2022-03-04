<?php

namespace Database\Seeders;

use App\Models\LaundryPrice;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class LaundryPriceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();
        LaundryPrice::truncate();
        LaundryPrice::create([
            'name'            => 'Laundry',
            'unit_type'       => 'Kilogram',
            'price'           => 10000.00,
            'laundry_type_id' => 1,
            'user_id'         => 1,
        ]);
        Schema::enableForeignKeyConstraints();
    }
}
