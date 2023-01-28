<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class StudyLevel extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('study_levels', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title', 255);
            $table->timestamps();
            $table->softDeletes();
        });
    }
}
