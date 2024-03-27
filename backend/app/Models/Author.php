<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Author extends Model
{
    use HasFactory;
    protected $fillable = ["full_name", "year", "country","biography","profile_img"];
    public function books () : HasMany {
        return $this->hasMany(Book::class);
    }

    public function categories () : BelongsToMany  {
        return $this->belongsToMany(Category::class, 'books')->distinct(); 
    }
}
