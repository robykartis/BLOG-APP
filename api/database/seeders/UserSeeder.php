<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        User::create([
            'name' => 'Admin',
            'email' => 'admin@email.com',
            'username' => 'admin',
            'user_role' => 'admin',
            'user_image' => null,
            'password' => Hash::make('123'),
        ]);
        User::create([
            'name' => 'User',
            'email' => 'user@email.com',
            'username' => 'user',
            'user_role' => 'user',
            'user_image' => null,
            'password' => Hash::make('123'),
        ]);
    }
}
