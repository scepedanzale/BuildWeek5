<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Booking extends Model
{
    use HasFactory;
    protected $fillable=['user_id','book_id',"is_active","extended",'expiring_date','starting_date'];
    public function book () : BelongsTo  {
        return $this->belongsTo(Book::class);
    }
    public function user () : BelongsTo  {
        return $this->belongsTo(User::class);
    }
}
