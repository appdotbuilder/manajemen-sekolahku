<?php

namespace Database\Seeders;

use App\Models\Subject;
use Illuminate\Database\Seeder;

class SubjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subjects = [
            [
                'name' => 'Matematika',
                'code' => 'MTK',
                'description' => 'Pembelajaran matematika dasar dan lanjutan',
                'color_code' => '#3B82F6', // Blue
                'credits' => 4,
            ],
            [
                'name' => 'Bahasa Indonesia',
                'code' => 'BIND',
                'description' => 'Pembelajaran bahasa dan sastra Indonesia',
                'color_code' => '#EF4444', // Red
                'credits' => 4,
            ],
            [
                'name' => 'Bahasa Inggris',
                'code' => 'BING',
                'description' => 'Pembelajaran bahasa Inggris',
                'color_code' => '#10B981', // Green
                'credits' => 3,
            ],
            [
                'name' => 'IPA (Fisika)',
                'code' => 'FIS',
                'description' => 'Ilmu Pengetahuan Alam - Fisika',
                'color_code' => '#8B5CF6', // Purple
                'credits' => 3,
            ],
            [
                'name' => 'IPA (Kimia)',
                'code' => 'KIM',
                'description' => 'Ilmu Pengetahuan Alam - Kimia',
                'color_code' => '#F59E0B', // Yellow
                'credits' => 3,
            ],
            [
                'name' => 'IPA (Biologi)',
                'code' => 'BIO',
                'description' => 'Ilmu Pengetahuan Alam - Biologi',
                'color_code' => '#06B6D4', // Cyan
                'credits' => 3,
            ],
            [
                'name' => 'IPS (Sejarah)',
                'code' => 'SEJ',
                'description' => 'Ilmu Pengetahuan Sosial - Sejarah',
                'color_code' => '#EC4899', // Pink
                'credits' => 2,
            ],
            [
                'name' => 'IPS (Geografi)',
                'code' => 'GEO',
                'description' => 'Ilmu Pengetahuan Sosial - Geografi',
                'color_code' => '#84CC16', // Lime
                'credits' => 2,
            ],
            [
                'name' => 'Pendidikan Kewarganegaraan',
                'code' => 'PKN',
                'description' => 'Pendidikan Pancasila dan Kewarganegaraan',
                'color_code' => '#DC2626', // Red-600
                'credits' => 2,
            ],
            [
                'name' => 'Pendidikan Agama Islam',
                'code' => 'PAI',
                'description' => 'Pendidikan Agama Islam dan Budi Pekerti',
                'color_code' => '#059669', // Emerald
                'credits' => 2,
            ],
            [
                'name' => 'Seni Budaya',
                'code' => 'SBUD',
                'description' => 'Seni dan Budaya',
                'color_code' => '#7C3AED', // Violet
                'credits' => 2,
            ],
            [
                'name' => 'Pendidikan Jasmani',
                'code' => 'PJOK',
                'description' => 'Pendidikan Jasmani, Olahraga dan Kesehatan',
                'color_code' => '#F97316', // Orange
                'credits' => 2,
            ],
        ];

        foreach ($subjects as $subject) {
            Subject::create($subject);
        }
    }
}