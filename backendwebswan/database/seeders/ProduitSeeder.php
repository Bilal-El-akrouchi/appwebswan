<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProduitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('produits')->insert([
            [
                'nom' =>'pull',
    
            ],
            [
                'nom' =>'F-shirt',
    
            ],
            [
                'nom' =>'short',
    
            ],
        ]);
    }
}
