<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * App\Models\Teacher
 *
 * @property int $id
 * @property string $teacher_id
 * @property string $first_name
 * @property string $last_name
 * @property string $email
 * @property \Illuminate\Support\Carbon $date_of_birth
 * @property string $gender
 * @property string $address
 * @property string $phone
 * @property int|null $user_id
 * @property \Illuminate\Support\Carbon $hire_date
 * @property string $position
 * @property string|null $specializations
 * @property string $status
 * @property array|null $qualifications
 * @property string|null $photo_url
 * @property float|null $salary
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read string $full_name
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Grade> $grades
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\SchoolClass> $homeroomClasses
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Schedule> $schedules
 * @property-read \App\Models\User|null $user
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher query()
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher active()
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher whereDateOfBirth($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher whereFirstName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher whereGender($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher whereHireDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher whereLastName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher wherePhotoUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher wherePosition($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher whereQualifications($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher whereSalary($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher whereSpecializations($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher whereTeacherId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Teacher whereUserId($value)

 * 
 * @mixin \Eloquent
 */
class Teacher extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'teacher_id',
        'first_name',
        'last_name',
        'email',
        'date_of_birth',
        'gender',
        'address',
        'phone',
        'user_id',
        'hire_date',
        'position',
        'specializations',
        'status',
        'qualifications',
        'photo_url',
        'salary',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'date_of_birth' => 'date',
        'hire_date' => 'date',
        'qualifications' => 'array',
        'salary' => 'decimal:2',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the user for the teacher.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the schedules for the teacher.
     */
    public function schedules(): HasMany
    {
        return $this->hasMany(Schedule::class);
    }

    /**
     * Get the homeroom classes for the teacher.
     */
    public function homeroomClasses(): HasMany
    {
        return $this->hasMany(SchoolClass::class, 'homeroom_teacher_id', 'user_id');
    }

    /**
     * Get the grades recorded by the teacher.
     */
    public function grades(): HasMany
    {
        return $this->hasMany(Grade::class);
    }

    /**
     * Get the teacher's full name.
     *
     * @return string
     */
    public function getFullNameAttribute(): string
    {
        return $this->first_name . ' ' . $this->last_name;
    }

    /**
     * Scope a query to only include active teachers.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }
}