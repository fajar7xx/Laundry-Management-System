<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLaundryPricesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('laundry_prices', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('unit_type');
            $table->unsignedInteger('price');
            $table->foreignId('laundry_type_id')->constrained('laundry_types');
            $table->foreignId('user_id')->constrained('users');
            $table->timestamps();
        });
        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('laundry_prices');
        Schema::enableForeignKeyConstraints();
    }
}
