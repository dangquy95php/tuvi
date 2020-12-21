<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'email' => 'lxc150896@gmail.com',
                'password' => bcrypt('12345'),
                'name' => 'dangquy',
                'role' => 1,
                'status' => 1
            ],
            [
                'email' => 'lxc@gmail.com',
                'password' => bcrypt('12345'),
                'name' => 'dangquy1',
                'role' => 1,
                'status' => 1
            ],
            [
                'email' => 'admin@gmail.com',
                'password' => bcrypt('12345'),
                'name' => 'dangquy',
                'role' => 2,
                'status' => 1
            ],
        ];

        \DB::table('users')->insert($data);
    }
}