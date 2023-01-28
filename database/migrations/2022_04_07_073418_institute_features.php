<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class InstituteFeatures extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('institute_features', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title', 255);
            $table->string('icon', 50);
            $table->text('details');
            $table->enum('status', ['Active', 'Inactive']);
            $table->timestamps();
            $table->softDeletes();
        });
    }
}
