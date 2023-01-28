<?php

namespace Modules\Schools\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class programSchools extends Model
{
    use HasFactory;

    protected $fillable = [];

    protected $table = "institute_programs";
}
