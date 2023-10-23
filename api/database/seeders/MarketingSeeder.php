<?php

namespace Database\Seeders;

use App\Models\Marketing;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MarketingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //  // Hero
        //  $table->string('hero_title');
        //  $table->text('hero_description');
        //  $table->string('hero_image_one')->nullable();
        //  $table->string('hero_image_two')->nullable();
        //  $table->string('hero_image_three')->nullable();
        //  $table->string('hero_image_four')->nullable();
        //  $table->string('hero_image_six')->nullable();
        //  // User Use App
        //  $table->string('use_app_one_title');
        //  $table->string('use_app_one_description');
        //  $table->string('use_app_two_title');
        //  $table->string('use_app_two_description');
        //  $table->string('use_app_three_title');
        //  $table->string('use_app_three_description');
        //  $table->string('use_app_four_title');
        //  $table->string('use_app_four_description');
        //  // Section Video Marketing
        //  $table->string('section_video_marketing_title');
        //  $table->string('section_video_marketing_video')->nullable();
        //  // Section One
        //  $table->string('section_one_title');
        //  $table->string('section_one_description');
        //  $table->string('section_one_image')->nullable();
        //  // Section Two
        //  $table->string('section_two_title');
        //  $table->string('section_two_description');
        //  $table->string('section_two_image')->nullable();
        //  // Section Three
        //  $table->string('section_three_title');
        //  $table->string('section_three_description');
        //  $table->string('section_three_image')->nullable();
        //  // Section Four
        //  $table->string('section_four_title');
        //  $table->string('section_four_description');
        //  $table->string('section_four_image')->nullable();
        //  // Section Five
        //  $table->string('section_five_title');
        //  $table->string('section_five_description');
        //  $table->string('section_five_image')->nullable();
        //  // Section Six
        //  $table->string('section_six_title');
        //  $table->string('section_six_description');

        Marketing::create([
            'hero_title' => 'Hero Title',
            'hero_description' => 'Hero Description',
            'hero_image_one' => 'Hero Image One',
            'hero_image_two' => 'Hero Image Two',
            'hero_image_three' => 'Hero Image Three',
            'hero_image_four' => 'Hero Image Four',
            'hero_image_six' => 'Hero Image Six',
            'use_app_one_title' => 'Use App One Title',
            'use_app_one_description' => 'Use App One Description',
            'use_app_two_title' => 'Use App Two Title',
            'use_app_two_description' => 'Use App Two Description',
            'use_app_three_title' => 'Use App Three Title',
            'use_app_three_description' => 'Use App Three Description',
            'use_app_four_title' => 'Use App Four Title',
            'use_app_four_description' => 'Use App Four Description',
            'section_video_marketing_title' => 'Section Video Marketing Title',
            'section_video_marketing_video' => 'Section Video Marketing Video',
            'section_one_title' => 'Section One Title',
            'section_one_description' => 'Section One Description',
            'section_one_image' => 'Section One Image',
            'section_two_title' => 'Section Two Title',
            'section_two_description' => 'Section Two Description',
            'section_two_image' => 'Section Two Image',
            'section_three_title' => 'Section Three Title',
            'section_three_description' => 'Section Three Description',
            'section_three_image' => 'Section Three Image',
            'section_four_title' => 'Section Four Title',
            'section_four_description' => 'Section Four Description',
            'section_four_image' => 'Section Four Image',
            'section_five_title' => 'Section Five Title',
            'section_five_description' => 'Section Five Description',
            'section_five_image' => 'Section Five Image',
            'section_six_title' => 'Section Six Title',
            'section_six_description' => 'Section Six Description',
        ]);
    }
}
