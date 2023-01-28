<?php

namespace Modules\Document\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Document extends Model
{
    use HasFactory;

    protected $fillable = [
        'passport_photo',
        'secondary_document',
        'senior_secondary_document'
    ];
    protected $table = 'documents';
}
