<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    /**
     * Menentukan apakah pengguna diizinkan membuat permintaan ini.
     */
    public function authorize(): bool
    {
        return true; // Ganti ke 'true' jika Anda ingin mengizinkan permintaan.
    }

    /**
     * Menyediakan aturan validasi yang berlaku untuk permintaan ini.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'email' => 'required|email|exists:users,email',
            'password' => 'required',
        ];
    }

    /**
     * Menyediakan pesan kesalahan kustom untuk aturan validasi.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'required' => 'The :attribute field is required.',
            'email' => 'The :attribute field must be a valid email address.',
            'exists' => 'Email address is not registered.',
        ];
    }
}
