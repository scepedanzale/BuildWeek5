<?php

namespace Database\Factories;

use App\Models\Book;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Booking>
 */
class BookingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $startDate = Carbon::parse(fake()->dateTimeBetween('-20 days',"now")->format('Y-m-d'));

        $endDate = $startDate->copy()->addDays(30);
        return [
            'user_id'=>User::get()->random()->id,
            'book_id'=>Book::get()->random()->id,
            "is_active"=>fake()->boolean(),
            'extended'=>fake()->boolean(),
            'starting_date'=> $startDate,
            'expiring_date'=>$endDate 

        ];
    }
}
