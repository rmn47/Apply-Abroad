<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationToInstituteFeaturesFromInstituteTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('institute_features', function (Blueprint $table) {
            $table->foreign('institute_id', 'institutes_fk_5901186')->references('id')->on('institutes');
            $table->foreign('added_by', 'users_fk_5901195')->references('id')->on('users');
            $table->foreign('updated_by', 'users_fk_5901199')->references('id')->on('users');
        });
    }
}
