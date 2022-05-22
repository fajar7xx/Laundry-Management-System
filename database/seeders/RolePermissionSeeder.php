<?php

namespace Database\Seeders;

use Exception;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        $roles = [
            'superadmin',
            'admin',
            'finance',
            'courier'
        ];

        $permissions = [
            'read outlets',
            'create outlets',
            'edit outlets',
            'delete outlets',
            'read couriers',
            'create couriers',
            'edit couriers',
            'delete couriers',
            'read products',
            'create products',
            'edit products',
            'delete products'
        ];

        DB::beginTransaction();
        try {
            foreach ($roles as $role) {
                Role::create(['name' => $role]);
            }

            foreach ($permissions as $permission) {
                Permission::create(['name' => $permission]);
            }


            DB::commit();
        } catch (Exception $e) {
            DB::rollBack();
            throw $e;
            $this->command->info('failed creating data sample ...' . $e->getMessage());
        }

        Schema::enableForeignKeyConstraints();
    }
}
