<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\Grade
 *
 * @property int $id
 * @property int $student_id
 * @property int $subject_id
 * @property int $teacher_id
 * @property int $academic_year_id
 * @property string $semester
 * @property string $type
 * @property string $title
 * @property float $score
 * @property float $max_score
 * @property float $weight
 * @property \Illuminate\Support\Carbon $date_recorded
 * @property string|null $notes
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\AcademicYear $academicYear
 * @property-read float $percentage
 * @property-read \App\Models\Student $student
 * @property-read \App\Models\Subject $subject
 * @property-read \App\Models\Teacher $teacher
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Grade newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Grade newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Grade query()
 * @method static \Illuminate\Database\Eloquent\Builder|Grade whereAcademicYearId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Grade whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Grade whereDateRecorded($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Grade whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Grade whereMaxScore($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Grade whereNotes($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Grade whereScore($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Grade whereSemester($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Grade whereStudentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Grade whereSubjectId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Grade whereTeacherId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Grade whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Grade whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Grade whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Grade whereWeight($value)

 * 
 * @mixin \Eloquent
 */
class Grade extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'student_id',
        'subject_id',
        'teacher_id',
        'academic_year_id',
        'semester',
        'type',
        'title',
        'score',
        'max_score',
        'weight',
        'date_recorded',
        'notes',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'score' => 'decimal:2',
        'max_score' => 'decimal:2',
        'weight' => 'decimal:2',
        'date_recorded' => 'date',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the student for the grade.
     */
    public function student(): BelongsTo
    {
        return $this->belongsTo(Student::class);
    }

    /**
     * Get the subject for the grade.
     */
    public function subject(): BelongsTo
    {
        return $this->belongsTo(Subject::class);
    }

    /**
     * Get the teacher for the grade.
     */
    public function teacher(): BelongsTo
    {
        return $this->belongsTo(Teacher::class);
    }

    /**
     * Get the academic year for the grade.
     */
    public function academicYear(): BelongsTo
    {
        return $this->belongsTo(AcademicYear::class);
    }

    /**
     * Get the grade percentage.
     *
     * @return float
     */
    public function getPercentageAttribute(): float
    {
        return $this->max_score > 0 ? ($this->score / $this->max_score) * 100 : 0;
    }
}