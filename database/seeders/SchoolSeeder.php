<?php

namespace Database\Seeders;

use App\Models\AcademicYear;
use App\Models\Role;
use App\Models\SchoolClass;
use App\Models\Student;
use App\Models\Teacher;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class SchoolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Get roles and academic year
        $adminRole = Role::where('slug', 'school-admin')->first();
        $teacherRole = Role::where('slug', 'teacher')->first();
        $studentRole = Role::where('slug', 'student')->first();
        $currentAcademicYear = AcademicYear::where('is_active', true)->first();

        // Create admin user
        $adminUser = User::create([
            'name' => 'School Administrator',
            'email' => 'admin@sekolahku.id',
            'password' => Hash::make('password'),
            'role_id' => $adminRole->id,
            'user_type' => 'admin',
            'phone' => '+62812345678',
            'is_active' => true,
        ]);

        // Create sample teachers
        $teachers = [
            [
                'name' => 'Dr. Siti Nurhaliza, S.Pd, M.Pd',
                'email' => 'siti.nurhaliza@sekolahku.id',
                'teacher_id' => 'TCH001',
                'first_name' => 'Siti',
                'last_name' => 'Nurhaliza',
                'position' => 'Principal Teacher',
                'specializations' => 'Matematika, Fisika',
            ],
            [
                'name' => 'Ahmad Hidayat, S.S, M.Pd',
                'email' => 'ahmad.hidayat@sekolahku.id',
                'teacher_id' => 'TCH002',
                'first_name' => 'Ahmad',
                'last_name' => 'Hidayat',
                'position' => 'Language Teacher',
                'specializations' => 'Bahasa Indonesia, Bahasa Inggris',
            ],
            [
                'name' => 'Ratna Dewi, S.Pd, M.Si',
                'email' => 'ratna.dewi@sekolahku.id',
                'teacher_id' => 'TCH003',
                'first_name' => 'Ratna',
                'last_name' => 'Dewi',
                'position' => 'Science Teacher',
                'specializations' => 'Biologi, Kimia',
            ],
        ];

        foreach ($teachers as $teacherData) {
            $user = User::create([
                'name' => $teacherData['name'],
                'email' => $teacherData['email'],
                'password' => Hash::make('password'),
                'role_id' => $teacherRole->id,
                'user_type' => 'teacher',
                'phone' => '+6281' . random_int(10000000, 99999999),
                'is_active' => true,
            ]);

            Teacher::create([
                'teacher_id' => $teacherData['teacher_id'],
                'first_name' => $teacherData['first_name'],
                'last_name' => $teacherData['last_name'],
                'email' => $teacherData['email'],
                'date_of_birth' => '1985-' . random_int(1, 12) . '-' . random_int(1, 28),
                'gender' => random_int(0, 1) ? 'male' : 'female',
                'address' => 'Jl. Pendidikan No. ' . random_int(1, 100) . ', Jakarta',
                'phone' => '+6281' . random_int(10000000, 99999999),
                'user_id' => $user->id,
                'hire_date' => '2020-07-01',
                'position' => $teacherData['position'],
                'specializations' => $teacherData['specializations'],
                'status' => 'active',
            ]);
        }

        // Create sample classes
        $classes = [
            ['name' => '7A', 'level' => 'middle', 'code' => '7A-2024', 'capacity' => 30],
            ['name' => '7B', 'level' => 'middle', 'code' => '7B-2024', 'capacity' => 30],
            ['name' => '8A', 'level' => 'middle', 'code' => '8A-2024', 'capacity' => 32],
            ['name' => '8B', 'level' => 'middle', 'code' => '8B-2024', 'capacity' => 32],
            ['name' => '9A', 'level' => 'middle', 'code' => '9A-2024', 'capacity' => 28],
            ['name' => '9B', 'level' => 'middle', 'code' => '9B-2024', 'capacity' => 28],
        ];

        $createdClasses = [];
        foreach ($classes as $classData) {
            $createdClasses[] = SchoolClass::create([
                'name' => $classData['name'],
                'level' => $classData['level'],
                'code' => $classData['code'],
                'capacity' => $classData['capacity'],
                'academic_year_id' => $currentAcademicYear->id,
                'homeroom_teacher_id' => Teacher::inRandomOrder()->first()->user_id,
                'is_active' => true,
            ]);
        }

        // Create sample students
        $studentNames = [
            ['Andi', 'Pratama'], ['Budi', 'Santoso'], ['Citra', 'Dewi'],
            ['Deni', 'Rahman'], ['Eka', 'Sari'], ['Fajar', 'Nugroho'],
            ['Gita', 'Purnama'], ['Hadi', 'Wijaya'], ['Ina', 'Kartika'],
            ['Joko', 'Susanto'], ['Kiki', 'Amelia'], ['Lina', 'Handayani'],
            ['Maya', 'Putri'], ['Nanda', 'Kusuma'], ['Oscar', 'Pratama'],
            ['Putri', 'Maharani'], ['Qori', 'Ananda'], ['Rina', 'Safitri'],
            ['Sandi', 'Kurniawan'], ['Tina', 'Lestari']
        ];

        foreach ($createdClasses as $class) {
            $studentsInClass = random_int(20, $class->capacity);
            
            for ($i = 0; $i < $studentsInClass; $i++) {
                $nameIndex = ($i + ($class->id * 10)) % count($studentNames);
                $name = $studentNames[$nameIndex];
                $studentId = 'STD' . str_pad((string)$class->id, 2, '0', STR_PAD_LEFT) . str_pad((string)($i + 1), 3, '0', STR_PAD_LEFT);
                $email = strtolower($name[0] . '.' . $name[1]) . $class->id . '@student.sekolahku.id';

                $user = User::create([
                    'name' => $name[0] . ' ' . $name[1],
                    'email' => $email,
                    'password' => Hash::make('password'),
                    'role_id' => $studentRole->id,
                    'user_type' => 'student',
                    'is_active' => true,
                ]);

                Student::create([
                    'student_id' => $studentId,
                    'first_name' => $name[0],
                    'last_name' => $name[1],
                    'email' => $email,
                    'date_of_birth' => '2010-' . random_int(1, 12) . '-' . random_int(1, 28),
                    'gender' => random_int(0, 1) ? 'male' : 'female',
                    'address' => 'Jl. Siswa No. ' . random_int(1, 200) . ', Jakarta',
                    'phone' => '+6285' . random_int(10000000, 99999999),
                    'parent_phone' => '+6281' . random_int(10000000, 99999999),
                    'parent_email' => 'parent.' . strtolower($name[0] . $name[1]) . '@gmail.com',
                    'parent_name' => 'Orang Tua ' . $name[0] . ' ' . $name[1],
                    'class_id' => $class->id,
                    'user_id' => $user->id,
                    'enrollment_date' => $currentAcademicYear->start_date,
                    'status' => 'active',
                ]);
            }
        }
    }
}