<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationToInstituteGalleryFromInstituteTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('institute_gallery', function (Blueprint $table) {
            $table->foreign('institute_id', 'institutes_fk_5901184')->references('id')->on('institutes');
            $table->foreign('added_by', 'users_fk_59011905')->references('id')->on('users');
            $table->foreign('updated_by', 'users_fk_59011909')->references('id')->on('users');
        });
    }
}
