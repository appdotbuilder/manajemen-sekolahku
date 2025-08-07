<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->foreignId('role_id')->nullable()->constrained('roles')->onDelete('set null');
            $table->enum('user_type', ['admin', 'teacher', 'student', 'parent'])->default('student');
            $table->string('phone', 20)->nullable();
            $table->text('address')->nullable();
            $table->date('date_of_birth')->nullable();
            $table->enum('gender', ['male', 'female'])->nullable();
            $table->string('photo_url')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamp('last_login_at')->nullable();
            
            $table->index(['user_type', 'is_active']);
            $table->index('role_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign(['role_id']);
            $table->dropIndex(['user_type', 'is_active']);
            $table->dropIndex(['role_id']);
            $table->dropColumn([
                'role_id', 'user_type', 'phone', 'address', 
                'date_of_birth', 'gender', 'photo_url', 
                'is_active', 'last_login_at'
            ]);
        });
    }
};