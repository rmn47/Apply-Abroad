<?php

namespace Modules\Score\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Score extends Model
{
    use HasFactory;

    protected $fillable = [
        'english_exam_type',
        'date_of_exam',
        'listing',
        'reading',
        'writing',
        'speaking',
        'gre_exam_date',
        'gre_verval',
        'gre_quantative',
        'gre_writing',
        'gre_verval_rank',
        'gre_quantative_rank',
        'gre_writing_rank',
        'gmat_exam_date',
        'gmat_verval',
        'gmat_writing',
        'gmat_total',
        'gmat_verval_rank',
        'gmat_writing_rank',
        'gmat_total_rank',
        'user_id'

    ];
    protected $table = 'scores';
}
