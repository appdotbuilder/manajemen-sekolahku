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
        Schema::create('teachers', function (Blueprint $table) {
            $table->id();
            $table->string('teacher_id')->unique(); // Employee Number
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email')->unique();
            $table->date('date_of_birth');
            $table->enum('gender', ['male', 'female']);
            $table->text('address');
            $table->string('phone', 20);
            $table->foreignId('user_id')->nullable()->constrained('users')->onDelete('cascade');
            $table->date('hire_date');
            $table->string('position')->default('Teacher');
            $table->text('specializations')->nullable(); // Teaching subjects/areas
            $table->enum('status', ['active', 'inactive', 'resigned'])->default('active');
            $table->json('qualifications')->nullable(); // Education background, certifications
            $table->string('photo_url')->nullable();
            $table->decimal('salary', 10, 2)->nullable();
            $table->timestamps();
            
            $table->index('teacher_id');
            $table->index(['first_name', 'last_name']);
            $table->index('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teachers');
    }
};