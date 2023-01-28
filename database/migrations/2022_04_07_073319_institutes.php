<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Institutes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('institutes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name', 255);
            $table->string('location', 255);
            $table->string('code', 50);
            $table->string('foundedIn', 50);
            $table->string('instituteType', 50);
            $table->string('noOfStudents', 50);
            $table->text('about');
            $table->string('logo', 255);
            $table->string('coverImage', 255);
            $table->string('latitude', 50);
            $table->string('longitude', 50);
            $table->string('avgApplicationFee', 50);
            $table->string('avgTutionFee', 50);
            $table->string('avgLivingCost', 50);
            $table->enum('status', ['Active', 'Inactive']);
            $table->timestamps();
            $table->softDeletes();
        });
    }
}
