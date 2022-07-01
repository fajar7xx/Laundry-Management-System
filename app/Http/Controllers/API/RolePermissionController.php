<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\RolePermission\SetRolePermissionRequest;
use App\Http\Requests\RolePermission\SetRoleUserRequest;
use App\Http\Resources\RolePermission\RolePermissionResource;
use App\Models\User;
use Spatie\Permission\Models\{Role, Permission};
use Illuminate\Http\Request;

class RolePermissionController extends Controller
{
    /**
     * getRolePermission
     *
     * @param  mixed $request
     * @return void
     */
    public function getRolePermission(Request $request)
    {
        $roleHasPermissions = \DB::table('role_has_permissions')
            ->select('permissions.name')
            ->join('permissions', 'role_has_permissions.permission_id', '=', 'permissions.id')
            ->where('role_id', $request->role_id)
            ->get();

        return RolePermissionResource::collection($roleHasPermissions);
    }

    /**
     * setRolePermission
     *
     * @param  mixed $request
     * @return void
     */
    public function setRolePermission(SetRolePermissionRequest $request): RolePermissionResource
    {
        $role = Role::find($request->role_id);
        $role->syncPermissions($request->permissions);
        return new RolePermissionResource($role);
    }

    /**
     * setRoleUser
     *
     * @param  mixed $request
     * @return void
     */
    public function setRoleUser(SetRoleUserRequest $request): RolePermissionResource
    {
        $user = User::find($request->user_id);
        $user->syncRoles([$request->role]);
        return new RolePermissionResource($user);
    }
}
