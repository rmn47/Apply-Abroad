<?php

namespace Modules\Schools\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class schoolPrograms extends Model
{
    use HasFactory;

    protected $fillable = [];

    protected $table = "institutes";
    protected $with = ['program'];
    public function program()
    {
        return $this->hasMany(programSchools::class, 'institute_id', 'id');
    }
}
