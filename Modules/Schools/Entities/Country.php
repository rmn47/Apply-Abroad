<?php

namespace Modules\Schools\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Schools\Entities\School;

class Country extends Model
{
    use HasFactory;
    protected $table = "countries";

    protected $fillable = [];
}
