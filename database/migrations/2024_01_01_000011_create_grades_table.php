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
        Schema::create('grades', function (Blueprint $table) {
            $table->id();
            $table->foreignId('student_id')->constrained('students')->onDelete('cascade');
            $table->foreignId('subject_id')->constrained('subjects')->onDelete('cascade');
            $table->foreignId('teacher_id')->constrained('teachers')->onDelete('cascade');
            $table->foreignId('academic_year_id')->constrained('academic_years')->onDelete('cascade');
            $table->enum('semester', ['1', '2']);
            $table->enum('type', ['assignment', 'quiz', 'midterm', 'final', 'project', 'participation']);
            $table->string('title');
            $table->decimal('score', 5, 2); // Max 999.99
            $table->decimal('max_score', 5, 2)->default(100);
            $table->decimal('weight', 3, 2)->default(1.00); // Percentage weight
            $table->date('date_recorded');
            $table->text('notes')->nullable();
            $table->timestamps();
            
            $table->index(['student_id', 'subject_id', 'semester']);
            $table->index(['academic_year_id', 'semester']);
            $table->index('type');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('grades');
    }
};