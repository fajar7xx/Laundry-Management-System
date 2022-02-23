<?php

namespace Database\Seeders;

use App\Models\LaundryType;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class LaundryTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $arrayOfTypes = [
            'cuci kering',
            'cuci basah',
            'cuci kering + setrika',
            'setrika'
        ];


        $types = collect($arrayOfTypes)->map(function ($type) {
            return [
                'name'       => $type,
                'created_at' => now(),
                'updated_at' => now()
            ];
        });
        Schema::disableForeignKeyConstraints();
        LaundryType::truncate();
        LaundryType::insert($types->toArray());
        Schema::enableForeignKeyConstraints();
    }
}
