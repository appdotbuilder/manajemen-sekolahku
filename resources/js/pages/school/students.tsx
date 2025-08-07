import React from 'react';
import { Head } from '@inertiajs/react';
import { AppShell } from '@/components/app-shell';

interface Student {
    id: number;
    student_id: string;
    first_name: string;
    last_name: string;
    email: string;
    status: string;
    phone?: string;
    class?: {
        name: string;
        code: string;
    };
    user?: {
        name: string;
    };
}

interface Props {
    students: {
        data: Student[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
    [key: string]: unknown;
}

export default function Students({ students }: Props) {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'active':
                return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
            case 'inactive':
                return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
            case 'graduated':
                return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
            case 'transferred':
                return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
            default:
                return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
        }
    };

    return (
        <AppShell>
            <Head title="Students - ManajemenSekolahKu" />
            
            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                            👨‍🎓 Students Management
                        </h1>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            Manage student information and enrollment
                        </p>
                    </div>
                    
                    <button className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        ➕ Add Student
                    </button>
                </div>

                {/* Stats Cards */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-200 dark:bg-slate-800 dark:ring-slate-700">
                        <div className="flex items-center">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                                <span className="text-sm">📊</span>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total</p>
                                <p className="text-xl font-bold text-gray-900 dark:text-white">
                                    {students.total}
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-200 dark:bg-slate-800 dark:ring-slate-700">
                        <div className="flex items-center">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                                <span className="text-sm">✅</span>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active</p>
                                <p className="text-xl font-bold text-gray-900 dark:text-white">
                                    {students.data.filter(s => s.status === 'active').length}
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-200 dark:bg-slate-800 dark:ring-slate-700">
                        <div className="flex items-center">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-100 dark:bg-yellow-900">
                                <span className="text-sm">🎓</span>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Graduated</p>
                                <p className="text-xl font-bold text-gray-900 dark:text-white">
                                    {students.data.filter(s => s.status === 'graduated').length}
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-200 dark:bg-slate-800 dark:ring-slate-700">
                        <div className="flex items-center">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
                                <span className="text-sm">📄</span>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Per Page</p>
                                <p className="text-xl font-bold text-gray-900 dark:text-white">
                                    {students.per_page}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Students Table */}
                <div className="rounded-lg bg-white shadow-sm ring-1 ring-gray-200 dark:bg-slate-800 dark:ring-slate-700">
                    <div className="px-6 py-4 border-b border-gray-200 dark:border-slate-700">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Student List
                        </h2>
                    </div>
                    
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-slate-700">
                            <thead className="bg-gray-50 dark:bg-slate-700">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                                        Student
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                                        ID
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                                        Class
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                                        Email
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 dark:bg-slate-800 dark:divide-slate-700">
                                {students.data.map((student) => (
                                    <tr key={student.id} className="hover:bg-gray-50 dark:hover:bg-slate-700">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="h-10 w-10 flex-shrink-0">
                                                    <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium text-sm">
                                                        {student.first_name.charAt(0)}{student.last_name.charAt(0)}
                                                    </div>
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                        {student.first_name} {student.last_name}
                                                    </div>
                                                    {student.phone && (
                                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                                            {student.phone}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                                            {student.student_id}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                                            {student.class ? (
                                                <div>
                                                    <div className="font-medium">{student.class.name}</div>
                                                    <div className="text-gray-500 dark:text-gray-400">{student.class.code}</div>
                                                </div>
                                            ) : (
                                                <span className="text-gray-400 dark:text-gray-500">Unassigned</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                            {student.email}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getStatusColor(student.status)}`}>
                                                {student.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <div className="flex space-x-2">
                                                <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                                                    📝 Edit
                                                </button>
                                                <button className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300">
                                                    👁️ View
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                    {/* Pagination Info */}
                    {students.last_page > 1 && (
                        <div className="px-6 py-3 border-t border-gray-200 dark:border-slate-700">
                            <div className="flex items-center justify-between">
                                <div className="text-sm text-gray-700 dark:text-gray-300">
                                    Showing {((students.current_page - 1) * students.per_page) + 1} to{' '}
                                    {Math.min(students.current_page * students.per_page, students.total)} of{' '}
                                    {students.total} results
                                </div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                    Page {students.current_page} of {students.last_page}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                
                {students.data.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">🎓</div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                            No students found
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Get started by adding your first student to the system.
                        </p>
                        <button className="mt-4 inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700">
                            ➕ Add First Student
                        </button>
                    </div>
                )}
            </div>
        </AppShell>
    );
}