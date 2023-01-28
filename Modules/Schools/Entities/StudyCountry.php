<?php

namespace Modules\Schools\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class studyCountry extends Model
{
    use HasFactory;

    protected $fillable = [];

    protected $table = "study_country";
}
