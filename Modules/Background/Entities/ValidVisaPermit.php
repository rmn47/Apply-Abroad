<?php

namespace Modules\Background\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class validVisaPermit extends Model
{
    use HasFactory;

    protected $fillable = [];

    protected $table = "valid_permit_visa";
}
