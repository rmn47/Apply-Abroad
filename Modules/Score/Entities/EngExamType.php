<?php

namespace Modules\Score\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class EngExamType extends Model
{
    use HasFactory;

    protected $fillable = [];

    protected $table = "english_exam_types";
}
