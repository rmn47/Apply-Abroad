<?php

namespace Modules\Intake\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Intake extends Model
{
    use HasFactory;

    protected $fillable = [];

    protected $table = "intakes";
}
