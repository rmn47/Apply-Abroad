<?php

namespace Modules\Schools\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Program_level extends Model
{
    use HasFactory;

    protected $fillable = [];

    protected $table = "program_levels";
}
