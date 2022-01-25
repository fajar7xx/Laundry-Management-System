<?php

namespace Database\Seeders;

use App\Models\Outlet;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class OutletSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();
        Outlet::create([
            'code'    => '01',
            'name'    => 'Laundry Naam',
            'status'  => true,
            'address' => 'Jalan Medan Tembung',
            'phone'   => '081277774000'
        ]);
        Schema::enableForeignKeyConstraints();
    }
}
