<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationFieldToSchoolsFromStudyLevel extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sub_study_levels', function (Blueprint $table) {
            $table->foreign('study_level_id', 'study_levels_fk_5901184')->references('id')->on('study_levels');
        });
    }
}
