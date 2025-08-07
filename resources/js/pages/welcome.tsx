import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="ManajemenSekolahKu - Modern School Management System">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
                {/* Header */}
                <header className="w-full px-6 py-4">
                    <div className="mx-auto flex max-w-7xl items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                                <span className="text-lg font-bold">🏫</span>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900 dark:text-white">ManajemenSekolahKu</h1>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Modern School Management</p>
                            </div>
                        </div>
                        
                        <nav className="flex items-center space-x-3">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    📊 Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="inline-flex items-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                                    >
                                        🔑 Login
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    >
                                        ✨ Register
                                    </Link>
                                </>
                            )}
                        </nav>
                    </div>
                </header>

                {/* Hero Section */}
                <div className="mx-auto max-w-7xl px-6 py-12">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                            🎓 Transform Your School
                            <span className="block text-blue-600 dark:text-blue-400">Management Experience</span>
                        </h2>
                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
                            Comprehensive, modern, and user-friendly school management system designed for administrators, teachers, students, and parents. Streamline every aspect of your educational institution.
                        </p>
                        
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            {!auth.user && (
                                <>
                                    <Link
                                        href={route('register')}
                                        className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                    >
                                        🚀 Get Started
                                    </Link>
                                    <Link
                                        href={route('login')}
                                        className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                                    >
                                        Already have an account? <span aria-hidden="true">→</span>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="mt-20">
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                            {/* User Management */}
                            <div className="relative rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 dark:bg-slate-800 dark:ring-slate-700">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                                    <span className="text-xl">👥</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">User Management</h3>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                    Multi-role system for Admin, Teachers, Students, and Parents with secure authentication
                                </p>
                            </div>

                            {/* Academics */}
                            <div className="relative rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 dark:bg-slate-800 dark:ring-slate-700">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                                    <span className="text-xl">📚</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Academic Management</h3>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                    Classes, subjects, schedules, grades, and digital report cards all in one place
                                </p>
                            </div>

                            {/* Attendance */}
                            <div className="relative rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 dark:bg-slate-800 dark:ring-slate-700">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 text-white">
                                    <span className="text-xl">✅</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Digital Attendance</h3>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                    Smart attendance tracking with QR codes, manual input, and comprehensive reporting
                                </p>
                            </div>

                            {/* Communication */}
                            <div className="relative rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 dark:bg-slate-800 dark:ring-slate-700">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-500 text-white">
                                    <span className="text-xl">💬</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Communication Hub</h3>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                    Announcements, messaging, academic calendar, and seamless parent-teacher communication
                                </p>
                            </div>
                        </div>

                        {/* Additional Features Row */}
                        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                            {/* Financial Management */}
                            <div className="relative rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 dark:bg-slate-800 dark:ring-slate-700">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 text-white">
                                    <span className="text-xl">💰</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Financial Management</h3>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                    Tuition tracking, payment history, and comprehensive financial reporting
                                </p>
                            </div>

                            {/* Online Exams */}
                            <div className="relative rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 dark:bg-slate-800 dark:ring-slate-700">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
                                    <span className="text-xl">📝</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Online Exams</h3>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                    Digital exam creation, submissions, automatic grading, and question bank management
                                </p>
                            </div>

                            {/* Documents */}
                            <div className="relative rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 dark:bg-slate-800 dark:ring-slate-700">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-green-500 text-white">
                                    <span className="text-xl">📄</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Document Management</h3>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                    Secure document storage, certificates, templates, and archive management
                                </p>
                            </div>

                            {/* Reports */}
                            <div className="relative rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 dark:bg-slate-800 dark:ring-slate-700">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 text-white">
                                    <span className="text-xl">📊</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Analytics & Reports</h3>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                    Comprehensive statistics, PDF/Excel exports, and insightful data visualization
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Technology Features */}
                    <div className="mt-20 rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 dark:bg-slate-800 dark:ring-slate-700">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">🌟 Modern Technology Stack</h3>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">
                                Built with cutting-edge technology for the best user experience
                            </p>
                        </div>
                        
                        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="text-center">
                                <div className="mx-auto h-16 w-16 rounded-full bg-blue-100 p-4 dark:bg-blue-900">
                                    <span className="text-2xl">📱</span>
                                </div>
                                <h4 className="mt-4 font-semibold text-gray-900 dark:text-white">Mobile-First PWA</h4>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                    Responsive design that works perfectly on all devices
                                </p>
                            </div>
                            
                            <div className="text-center">
                                <div className="mx-auto h-16 w-16 rounded-full bg-green-100 p-4 dark:bg-green-900">
                                    <span className="text-2xl">⚡</span>
                                </div>
                                <h4 className="mt-4 font-semibold text-gray-900 dark:text-white">Lightning Fast</h4>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                    Optimized performance for quick loading and smooth interactions
                                </p>
                            </div>
                            
                            <div className="text-center">
                                <div className="mx-auto h-16 w-16 rounded-full bg-purple-100 p-4 dark:bg-purple-900">
                                    <span className="text-2xl">🔒</span>
                                </div>
                                <h4 className="mt-4 font-semibold text-gray-900 dark:text-white">Secure & Reliable</h4>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                    Enterprise-grade security with role-based access control
                                </p>
                            </div>
                            
                            <div className="text-center">
                                <div className="mx-auto h-16 w-16 rounded-full bg-orange-100 p-4 dark:bg-orange-900">
                                    <span className="text-2xl">🎨</span>
                                </div>
                                <h4 className="mt-4 font-semibold text-gray-900 dark:text-white">Beautiful UI</h4>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                    Clean, modern interface designed for ease of use
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-20 text-center">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Ready to Transform Your School Management?
                        </h3>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                            Join thousands of educational institutions already using ManajemenSekolahKu
                        </p>
                        
                        {!auth.user && (
                            <div className="mt-8 flex items-center justify-center gap-4">
                                <Link
                                    href={route('register')}
                                    className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:from-blue-700 hover:to-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                >
                                    🚀 Start Your Free Trial
                                </Link>
                                <Link
                                    href={route('login')}
                                    className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
                                >
                                    🔑 Login to Existing Account
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <footer className="mt-20 border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-slate-800">
                    <div className="mx-auto max-w-7xl px-6 py-8">
                        <div className="text-center">
                            <div className="flex items-center justify-center space-x-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                                    <span className="text-sm font-bold">🏫</span>
                                </div>
                                <span className="text-lg font-bold text-gray-900 dark:text-white">ManajemenSekolahKu</span>
                            </div>
                            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                                Empowering education through technology. Built with ❤️ for schools worldwide.
                            </p>
                            <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
                                © 2024 ManajemenSekolahKu. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}