<?php

namespace Modules\Background\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Background extends Model
{
    use HasFactory;

    protected $fillable = [
        'refusal_checkbox',
        'valid_permit_visa',
        'refusal_details',
        'user_id'
    ];
    
    protected $table = 'backgrounds';
}
