<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = [
            [
                'name' => 'Super Admin',
                'slug' => 'super-admin',
                'description' => 'Full system access and control',
                'permissions' => [
                    'manage_users', 'manage_roles', 'manage_academic_years',
                    'manage_classes', 'manage_subjects', 'manage_students', 
                    'manage_teachers', 'manage_schedules', 'manage_attendance',
                    'manage_grades', 'view_reports', 'manage_finances'
                ],
                'is_active' => true,
            ],
            [
                'name' => 'School Admin',
                'slug' => 'school-admin',
                'description' => 'School-level administration access',
                'permissions' => [
                    'manage_classes', 'manage_subjects', 'manage_students',
                    'manage_teachers', 'manage_schedules', 'view_attendance',
                    'view_grades', 'view_reports'
                ],
                'is_active' => true,
            ],
            [
                'name' => 'Teacher',
                'slug' => 'teacher',
                'description' => 'Teaching and classroom management access',
                'permissions' => [
                    'view_students', 'manage_attendance', 'manage_grades',
                    'view_schedules', 'manage_assignments'
                ],
                'is_active' => true,
            ],
            [
                'name' => 'Student',
                'slug' => 'student',
                'description' => 'Student portal access',
                'permissions' => [
                    'view_grades', 'view_attendance', 'view_schedules',
                    'submit_assignments'
                ],
                'is_active' => true,
            ],
            [
                'name' => 'Parent',
                'slug' => 'parent',
                'description' => 'Parent portal access to child information',
                'permissions' => [
                    'view_child_grades', 'view_child_attendance',
                    'view_child_schedules', 'communicate_teachers'
                ],
                'is_active' => true,
            ],
        ];

        foreach ($roles as $roleData) {
            Role::create($roleData);
        }
    }
}