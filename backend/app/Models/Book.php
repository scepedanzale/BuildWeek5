<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Book extends Model
{
    use HasFactory;
    protected $fillable =["title","year","available_copies","cover_url","abstract",'author_id','category_id'];
    public function bookings () : HasMany  {
        return $this->hasMany(Booking::class);
    }

    public function author () : BelongsTo  {
        return $this->belongsTo(Author::class); 
    }
    public function category () : BelongsTo  {
        return $this->belongsTo(Category::class); 
    }

    public function favorites () : HasMany  {
        return $this->hasMany(Favorites::class); 
    }
}
