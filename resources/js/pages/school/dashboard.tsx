import React from 'react';
import { Head } from '@inertiajs/react';
import { AppShell } from '@/components/app-shell';

interface DashboardStats {
    total_students: number;
    total_teachers: number;
    total_classes: number;
    total_subjects: number;
}

interface AttendanceData {
    date: string;
    present: number;
    total: number;
    percentage: number;
}

interface Grade {
    id: number;
    title: string;
    score: number;
    max_score: number;
    date_recorded: string;
    student: {
        first_name: string;
        last_name: string;
    };
    subject: {
        name: string;
        color_code: string;
    };
}

interface Schedule {
    id: number;
    start_time: string;
    end_time: string;
    room: string;
    class: {
        name: string;
        code: string;
    };
    subject: {
        name: string;
        color_code: string;
    };
    teacher: {
        first_name: string;
        last_name: string;
    };
}

interface AcademicYear {
    id: number;
    name: string;
    start_date: string;
    end_date: string;
}

interface Props {
    stats: DashboardStats;
    attendanceData: AttendanceData[];
    recentGrades: Grade[];
    todaySchedules: Schedule[];
    currentAcademicYear: AcademicYear | null;
    [key: string]: unknown;
}

export default function Dashboard({ 
    stats, 
    attendanceData, 
    recentGrades, 
    todaySchedules, 
    currentAcademicYear 
}: Props) {
    const formatTime = (time: string) => {
        const [hours, minutes] = time.split(':');
        const hour = parseInt(hours);
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour % 12 || 12;
        return `${displayHour}:${minutes} ${ampm}`;
    };

    return (
        <AppShell>
            <Head title="Dashboard - ManajemenSekolahKu" />
            
            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                            🏫 School Dashboard
                        </h1>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            {currentAcademicYear 
                                ? `Academic Year: ${currentAcademicYear.name}`
                                : 'Welcome to ManajemenSekolahKu'
                            }
                        </p>
                    </div>
                    
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        📅 {new Date().toLocaleDateString('id-ID', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                        })}
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200 dark:bg-slate-800 dark:ring-slate-700">
                        <div className="flex items-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                                <span className="text-xl">👨‍🎓</span>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Students</p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {stats.total_students.toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200 dark:bg-slate-800 dark:ring-slate-700">
                        <div className="flex items-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                                <span className="text-xl">👨‍🏫</span>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Teachers</p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {stats.total_teachers.toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200 dark:bg-slate-800 dark:ring-slate-700">
                        <div className="flex items-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                                <span className="text-xl">🏛️</span>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Classes</p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {stats.total_classes.toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200 dark:bg-slate-800 dark:ring-slate-700">
                        <div className="flex items-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900">
                                <span className="text-xl">📚</span>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Subjects</p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {stats.total_subjects.toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                    {/* Attendance Chart */}
                    <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200 dark:bg-slate-800 dark:ring-slate-700">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            📊 Attendance Overview (Last 7 Days)
                        </h2>
                        
                        <div className="space-y-3">
                            {attendanceData.map((data, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 w-12">
                                            {data.date}
                                        </span>
                                        <div className="flex-1">
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700">
                                                <div 
                                                    className="h-2 bg-green-500 rounded-full transition-all duration-300"
                                                    style={{ width: `${data.percentage}%` }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-sm font-semibold text-gray-900 dark:text-white">
                                            {data.percentage}%
                                        </span>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            {data.present}/{data.total}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Today's Schedule */}
                    <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200 dark:bg-slate-800 dark:ring-slate-700">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            🕒 Today's Schedule
                        </h2>
                        
                        {todaySchedules.length > 0 ? (
                            <div className="space-y-3">
                                {todaySchedules.map((schedule) => (
                                    <div key={schedule.id} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-slate-700">
                                        <div 
                                            className="h-3 w-3 rounded-full"
                                            style={{ backgroundColor: schedule.subject.color_code }}
                                        />
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                                                {schedule.subject.name}
                                            </p>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                                {schedule.class.name} • Room {schedule.room || 'TBA'}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                {formatTime(schedule.start_time)} - {formatTime(schedule.end_time)}
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                {schedule.teacher.first_name} {schedule.teacher.last_name}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-8">
                                <span className="text-4xl">📅</span>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                    No classes scheduled for today
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Recent Grades */}
                {recentGrades.length > 0 && (
                    <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200 dark:bg-slate-800 dark:ring-slate-700">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            📝 Recent Grades (Last 7 Days)
                        </h2>
                        
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {recentGrades.map((grade) => (
                                <div key={grade.id} className="p-4 rounded-lg bg-gray-50 dark:bg-slate-700">
                                    <div className="flex items-center justify-between mb-2">
                                        <span 
                                            className="inline-block h-3 w-3 rounded-full"
                                            style={{ backgroundColor: grade.subject.color_code }}
                                        />
                                        <span className="text-lg font-bold text-gray-900 dark:text-white">
                                            {grade.score}/{grade.max_score}
                                        </span>
                                    </div>
                                    <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                                        {grade.title}
                                    </h3>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                                        {grade.subject.name}
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        {grade.student.first_name} {grade.student.last_name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </AppShell>
    );
}