<?php

namespace App\Http\Controllers;

use App\Models\Favorites;
use App\Http\Requests\StoreFavoritesRequest;
use App\Http\Requests\UpdateFavoritesRequest;
use Illuminate\Support\Facades\Auth;

class FavoritesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       return Favorites::where("user_id", Auth::user()->id)->with('book.author')->get();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFavoritesRequest $request)
    {
        $this->authorize('create', [Favorites::class]);
        $newFav = $request->only(["book_id"]);
        $newFav["user_id"]= Auth::user()->id;
        $fav = Favorites::create($newFav);
        if($fav){
           return ["message" => "Libro aggiunto ai preferiti"];
        } else {
            return ["message" => "Ops! C'è stato un errore ", "error"=>"favorito non presente o che cazzo ne so"];
        };
    }

    /**
     * Display the specified resource.
     */
    public function show(Favorites $favorites)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Favorites $favorites)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFavoritesRequest $request, Favorites $favorites)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Favorites $favorites)
    {
        $delteFav = $favorites->delete();
        return $delteFav ? "fav eliminato" : "fav non trovato";
    }
}
