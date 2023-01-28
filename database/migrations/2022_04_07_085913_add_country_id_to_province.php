<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCountryIdToProvince extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('province', function (Blueprint $table) {
            $table->foreign('country_id', 'countries_fk_5901184')->references('id')->on('countries');
        });
    }
}
