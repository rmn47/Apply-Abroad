<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationInstitutesToUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('institutes', function (Blueprint $table) {
            $table->foreign('added_by', 'users_fk_5901187')->references('id')->on('users');
            $table->foreign('updated_by', 'users_fk_5901190')->references('id')->on('users');
        });
    }
}
