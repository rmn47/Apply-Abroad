<?php

namespace Modules\Schools\Entities;

use Illuminate\Database\Eloquent\Model;
use Modules\Schools\Entities\School;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Program extends Model
{
    use HasFactory;

    protected $table = "institute_programs";

    protected $fillable = [];

    protected $with = ['school'];

    public function school()
    {
        return $this->BelongsTo(School::class, 'institute_id', 'id');
    }
}
