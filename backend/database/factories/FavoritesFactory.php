<?php

namespace Database\Factories;

use App\Models\Book;
use App\Models\Favorites;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Favorites>
 */
class FavoritesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    private function getRandomBookId() {
        // Ottieni tutti gli ID dei libri esistenti
        $existingBookIds = Favorites::pluck('book_id')->toArray();
    
        // Ottieni un ID di libro casuale che non è già stato utilizzato
        do {
            $casualID = Book::get()->random()->id;
        } while (in_array($casualID, $existingBookIds));
            return $casualID;
    }

    public function definition(): array
    {
        return [
            "user_id"=>User::get()->random()->id,
            'book_id'=>$this->getRandomBookId(),
        ];
    }
}
