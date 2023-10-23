<?php

namespace App\Http\Requests\Marketing;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }
    public function attributes()
    {
        return [
            'hero_title' => 'Judul Hero',
            'hero_description' => 'Deskripsi Hero',
            'hero_image_one' => 'Gambar Hero 1',
            'hero_image_two' => 'Gambar Hero 2',
            'hero_image_three' => 'Gambar Hero 3',
            'hero_image_four' => 'Gambar Hero 4',
            'hero_image_six' => 'Gambar Hero 6',
            'use_app_one_title' => 'Judul Penggunaan Aplikasi 1',
            'use_app_one_description' => 'Deskripsi Penggunaan Aplikasi 1',
            'use_app_two_title' => 'Judul Penggunaan Aplikasi 2',
            'use_app_two_description' => 'Deskripsi Penggunaan Aplikasi 2',
            'use_app_three_title' => 'Judul Penggunaan Aplikasi 3',
            'use_app_three_description' => 'Deskripsi Penggunaan Aplikasi 3',
            'use_app_four_title' => 'Judul Penggunaan Aplikasi 4',
            'use_app_four_description' => 'Deskripsi Penggunaan Aplikasi 4',
            'section_video_marketing_title' => 'Judul Video Pemasaran',
            'section_video_marketing_video' => 'Video Pemasaran',
            'section_one_title' => 'Judul Bagian Satu',
            'section_one_description' => 'Deskripsi Bagian Satu',
            'section_one_image' => 'Gambar Bagian Satu',
            'section_two_title' => 'Judul Bagian Dua',
            'section_two_description' => 'Deskripsi Bagian Dua',
            'section_two_image' => 'Gambar Bagian Dua',
            'section_three_title' => 'Judul Bagian Tiga',
            'section_three_description' => 'Deskripsi Bagian Tiga',
            'section_three_image' => 'Gambar Bagian Tiga',
            'section_four_title' => 'Judul Bagian Empat',
            'section_four_description' => 'Deskripsi Bagian Empat',
            'section_four_image' => 'Gambar Bagian Empat',
            'section_five_title' => 'Judul Bagian Lima',
            'section_five_description' => 'Deskripsi Bagian Lima',
            'section_five_image' => 'Gambar Bagian Lima',
            'section_six_title' => 'Judul Bagian Enam',
            'section_six_description' => 'Deskripsi Bagian Enam',
        ];
    }

    public function rules(): array
    {
        return [
            'hero_title' => 'required',
            'hero_description' => 'required',
            'hero_image_one' => 'required',
            'hero_image_two' => 'required',
            'hero_image_three' => 'required',
            'hero_image_four' => 'required',
            'hero_image_six' => 'required',
            'use_app_one_title' => 'required',
            'use_app_one_description' => 'required',
            'use_app_two_title' => 'required',
            'use_app_two_description' => 'required',
            'use_app_three_title' => 'required',
            'use_app_three_description' => 'required',
            'use_app_four_title' => 'required',
            'use_app_four_description' => 'required',
            'section_video_marketing_title' => 'required',
            'section_video_marketing_video' => 'required',
            'section_one_title' => 'required',
            'section_one_description' => 'required',
            'section_one_image' => 'required',
            'section_two_title' => 'required',
            'section_two_description' => 'required',
            'section_two_image' => 'required',
            'section_three_title' => 'required',
            'section_three_description' => 'required',
            'section_three_image' => 'required',
            'section_four_title' => 'required',
            'section_four_description' => 'required',
            'section_four_image' => 'required',
            'section_five_title' => 'required',
            'section_five_description' => 'required',
            'section_five_image' => 'required',
            'section_six_title' => 'required',
            'section_six_description' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'required' => 'Kolom :attribute wajib diisi',
        ];
    }
}
