<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('propertiesimage', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('material_brand')->nullable();
            $table->string('property_size')->nullable();
            $table->decimal('price', 10, 2);
            $table->unsignedBigInteger('service_id');
            $table->timestamps();
            $table->foreign('service_id')
                  ->references('id')
                  ->on('services')
                  ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('propertiesimage');
    }
};
