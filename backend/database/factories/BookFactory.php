<?php

namespace Database\Factories;

use App\Models\Author;
use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $copieDisponibili = rand(1,10);

        return [
           'title'=>fake()->text(20),
           'year'=>fake()->year(),
           'available_copies'=>$copieDisponibili,
           'cover_url' => "https://source.unsplash.com/random/".fake()->numberBetween(1,200),
           'author_id'=>Author::get()->random()->id,
           'category_id'=>Category::get()->random()->id,
           "abstract"=>fake()->text(200),
        ];
    }
}
