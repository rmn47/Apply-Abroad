<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class InstituteGallery extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('institute_gallery', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('image_path', 255);
            $table->string('image_type', 50);
            $table->text('details');
            $table->enum('status', ['Active', 'Inactive']);
            $table->timestamps();
            $table->softDeletes();
        });
    }
}
