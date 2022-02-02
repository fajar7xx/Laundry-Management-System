<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();
        User::truncate();
        User::create([
            'name'              => 'Administrator',
            'email'             => 'admin@laundry.net',
            'email_verified_at' => now(),
            'password'          => \Hash::make('tekanenter'),
            'role'              => 0,
            'outlet_id'         => 1
        ]);

        User::factory()->count(20)->create();
        Schema::enableForeignKeyConstraints();
    }
}
