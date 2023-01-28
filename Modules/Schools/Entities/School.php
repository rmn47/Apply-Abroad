<?php

namespace Modules\Schools\Entities;

use Countries;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Schools\Entities\Country;
use Modules\Schools\Entities\Program;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class School extends Model
{
    use HasFactory;
    protected $table = "institutes";
    protected $fillable = [];


    protected $with = ['country'];

    public function country()
    {
        return $this->BelongsTo(Country::class, 'country_id', 'id');
    }
    // public function program()
    // {
    //     return $this->hasMany(Program::class, 'institute_id', 'id');
    // }
}
