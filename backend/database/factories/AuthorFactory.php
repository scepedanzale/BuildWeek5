<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Author>
 */
class AuthorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $year = rand(1950, 1990);
        return [
            'full_name'=>fake()->name(),
            'country'=>fake()->country(),
            'year'=>fake()->year,
            "biography"=>fake()->paragraphs(5,true),
            'profile_img'=>'https://source.unsplash.com/random/?person='.fake()->numberBetween(1,50)
        ];
    }
}
