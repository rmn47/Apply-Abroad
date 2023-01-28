<?php

namespace Modules\Education\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Education extends Model
{
    use HasFactory;

    protected $fillable = [
        'education_country_name',
        'user_id',
        'high_education',
        'grading_scheme',
        'grade_average',
        'country_institute',
        'institute_name',
        'education_level',
        'primary_language',
        'attend_institution_from',
        'attend_institution_to',
        'degree_name',
        'education_check',
        'address',
        'city_town',
        'provience',
        'postal_zip',
        'graduation_date'
    ];
   
    protected $table = 'educations';
}
