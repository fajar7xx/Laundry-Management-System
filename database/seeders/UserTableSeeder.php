<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Administrator',
            'email' => 'admin@laundry.net',
            'email_verified_at' => now(),
            'password' => \Hash::make('tekanenter'),
            'role' => 0,
            'outlet_id' => 1
        ]);
    }
}
