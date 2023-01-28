<?php

namespace Modules\SubCategories\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class SubCategory extends Model
{
    use HasFactory;

    protected $fillable = [];
    protected $table = "sub_categories";
}
