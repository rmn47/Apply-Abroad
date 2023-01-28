<?php

namespace Modules\Schools\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Userprogram extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'program_id',
        'amount_paid'
    ];

    protected $table = 'user_programs';

    protected $with = ['program'];

    public function program()
    {
        return $this->BelongsTo(Program::class, 'program_id', 'id');
    }
}
