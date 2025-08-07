<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\AcademicYear;
use App\Models\Attendance;
use App\Models\Grade;
use App\Models\SchoolClass;
use App\Models\Student;
use App\Models\Subject;
use App\Models\Teacher;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SchoolController extends Controller
{
    /**
     * Display the main school dashboard.
     */
    public function index()
    {
        $currentAcademicYear = AcademicYear::where('is_active', true)->first();
        
        // Get key statistics
        $stats = [
            'total_students' => Student::where('status', 'active')->count(),
            'total_teachers' => Teacher::where('status', 'active')->count(),
            'total_classes' => SchoolClass::where('is_active', true)->count(),
            'total_subjects' => Subject::where('is_active', true)->count(),
        ];

        // Get recent attendance data for chart (last 7 days)
        $attendanceData = [];
        for ($i = 6; $i >= 0; $i--) {
            $date = now()->subDays($i);
            $present = Attendance::whereDate('date', $date)
                ->where('status', 'present')
                ->count();
            $total = Attendance::whereDate('date', $date)->count();
            
            $attendanceData[] = [
                'date' => $date->format('M d'),
                'present' => $present,
                'total' => $total,
                'percentage' => $total > 0 ? round(($present / $total) * 100, 1) : 0
            ];
        }

        // Get recent grades summary
        $recentGrades = Grade::with(['student', 'subject'])
            ->where('date_recorded', '>=', now()->subDays(7))
            ->latest('date_recorded')
            ->limit(5)
            ->get();

        // Get upcoming classes (today's schedule)
        $todaySchedules = [];
        if ($currentAcademicYear) {
            $todaySchedules = \App\Models\Schedule::with(['class', 'subject', 'teacher'])
                ->where('academic_year_id', $currentAcademicYear->id)
                ->where('day_of_week', strtolower(now()->format('l')))
                ->where('is_active', true)
                ->orderBy('start_time')
                ->limit(5)
                ->get();
        }

        return Inertia::render('school/dashboard', [
            'stats' => $stats,
            'attendanceData' => $attendanceData,
            'recentGrades' => $recentGrades,
            'todaySchedules' => $todaySchedules,
            'currentAcademicYear' => $currentAcademicYear,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        $view = $request->query('view', 'dashboard');
        
        switch ($view) {
            case 'students':
                $students = Student::with(['class', 'user'])
                    ->where('status', 'active')
                    ->latest()
                    ->paginate(12);

                return Inertia::render('school/students', [
                    'students' => $students
                ]);

            case 'teachers':
                $teachers = Teacher::with(['user'])
                    ->where('status', 'active')
                    ->latest()
                    ->paginate(12);

                return Inertia::render('school/teachers', [
                    'teachers' => $teachers
                ]);

            case 'classes':
                $classes = SchoolClass::with(['academicYear', 'homeroomTeacher', 'students'])
                    ->where('is_active', true)
                    ->latest()
                    ->get();

                return Inertia::render('school/classes', [
                    'classes' => $classes
                ]);

            case 'attendance':
                $today = now()->format('Y-m-d');
                
                // Today's attendance summary
                $todayAttendance = [
                    'total' => Attendance::whereDate('date', $today)->count(),
                    'present' => Attendance::whereDate('date', $today)->where('status', 'present')->count(),
                    'absent' => Attendance::whereDate('date', $today)->where('status', 'absent')->count(),
                    'late' => Attendance::whereDate('date', $today)->where('status', 'late')->count(),
                    'excused' => Attendance::whereDate('date', $today)->where('status', 'excused')->count(),
                ];

                // Recent attendance records
                $recentAttendance = Attendance::with(['student'])
                    ->whereDate('date', $today)
                    ->latest()
                    ->limit(10)
                    ->get();

                return Inertia::render('school/attendance', [
                    'todayAttendance' => $todayAttendance,
                    'recentAttendance' => $recentAttendance,
                ]);

            default:
                return $this->index();
        }
    }
}