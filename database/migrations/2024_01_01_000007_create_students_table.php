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
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string('student_id')->unique(); // NIS/Student Number
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email')->unique();
            $table->date('date_of_birth');
            $table->enum('gender', ['male', 'female']);
            $table->text('address');
            $table->string('phone', 20)->nullable();
            $table->string('parent_phone', 20);
            $table->string('parent_email')->nullable();
            $table->string('parent_name');
            $table->foreignId('class_id')->nullable()->constrained('classes')->onDelete('set null');
            $table->foreignId('user_id')->nullable()->constrained('users')->onDelete('cascade');
            $table->date('enrollment_date');
            $table->enum('status', ['active', 'inactive', 'graduated', 'transferred'])->default('active');
            $table->json('emergency_contacts')->nullable();
            $table->json('medical_info')->nullable();
            $table->string('photo_url')->nullable();
            $table->timestamps();
            
            $table->index('student_id');
            $table->index(['first_name', 'last_name']);
            $table->index('status');
            $table->index('class_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};