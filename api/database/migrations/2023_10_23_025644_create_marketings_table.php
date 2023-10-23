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
        Schema::create('marketings', function (Blueprint $table) {
            $table->id();
            // Hero
            $table->string('hero_title');
            $table->text('hero_description');
            $table->string('hero_image_one')->nullable();
            $table->string('hero_image_two')->nullable();
            $table->string('hero_image_three')->nullable();
            $table->string('hero_image_four')->nullable();
            $table->string('hero_image_six')->nullable();
            // User Use App
            $table->string('use_app_one_title');
            $table->string('use_app_one_description');
            $table->string('use_app_two_title');
            $table->string('use_app_two_description');
            $table->string('use_app_three_title');
            $table->string('use_app_three_description');
            $table->string('use_app_four_title');
            $table->string('use_app_four_description');
            // Section Video Marketing
            $table->string('section_video_marketing_title');
            $table->string('section_video_marketing_video')->nullable();
            // Section One
            $table->string('section_one_title');
            $table->string('section_one_description');
            $table->string('section_one_image')->nullable();
            // Section Two
            $table->string('section_two_title');
            $table->string('section_two_description');
            $table->string('section_two_image')->nullable();
            // Section Three
            $table->string('section_three_title');
            $table->string('section_three_description');
            $table->string('section_three_image')->nullable();
            // Section Four
            $table->string('section_four_title');
            $table->string('section_four_description');
            $table->string('section_four_image')->nullable();
            // Section Five
            $table->string('section_five_title');
            $table->string('section_five_description');
            $table->string('section_five_image')->nullable();
            // Section Six
            $table->string('section_six_title');
            $table->string('section_six_description');
            $table->string('section_six_image')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('marketings');
    }
};
