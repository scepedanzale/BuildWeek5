<?php

namespace App\Http\Controllers;

use App\Models\Author;
use App\Models\Book;
use App\Http\Requests\StoreBookRequest;
use App\Http\Requests\UpdateBookRequest;
use App\Models\Category;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        ['page' => $page, 'category' => $category, 'category_id' => $category_id, 'title' => $title, "author" => $author, "abstract" => $abstract, "year" => $year] = $request;
        $page = $page ? $page : 1;

        return Book::with("author")->with("category")
            ->where("title", "like", "%$title%")
            ->where("abstract", "like", "%$abstract%")
            ->where("year", "like", "%$year%")
            ->whereHas('category', function ($query) use ($category, $category_id) {
                if ($category_id) {
                    $query->where('id', $category_id);
                } else {
                    $query->where('name', 'like', "%$category%");
                }
            })
            ->whereHas('author', function ($query) use ($author) {
                $query->where('full_name', 'like', "%$author%");
            })
            ->latest()
            ->paginate(20, ['*'], 'page', $page);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return ["categories" => Category::all(), "authors" => Author::all()];
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBookRequest $request)
    {
        /* $this->authorize('create', [Book::class]); */
        $newBook = $request->only(['title', 'year', 'abstract', "author_id", "category_id"]);
        if ($request->has("cover_url")) {
            $newBook["cover_url"] = $request->cover_url;
        }
        if ($request->has("available_copies")) {
            $newBook["available_copies"] = $request->available_copies;
        }
        try {
            $book = Book::create($newBook);
            if ($book) {
                return ["message" => "Libro creato con successo"];
            } else {
                return ["message" => "Errore durante la creazione del libro", "error" => "Libro non presente o che cazzo ne so"];
            }
        } catch (\Throwable $th) {
            return ["message" => "Errore durante la creazione del libro: ", "error" => $th];
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Book $book)
    {
        return $book->load("author.books")->load("category");
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Book $book)
    {
        return [
            "book" => $book->load("author")->load("category"),
            "categories" => Category::orderBy("name")->get(),
            "authors" => Author::orderBy("full_name")->get()
        ];
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBookRequest $request, Book $book)
    {

       $book->title = $request->title;
       $book->author_id = $request->author_id;
       $book->category_id = $request->category_id;
       $book->abstract = $request->abstract;
       $book->available_copies = $request->available_copies;
       $book->cover_url = $request->cover_url;
       $book->year = $request->year;
       $book->update();
       return $book;


    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book)
    {
        try {
            $book->delete();
            return ["message" => "l'oggetto è stato eliminato con successo"];
        } catch (\Throwable $th) {
            return ["message" => "Si è verificato un errore", "error" => $th];
        }
    }
}
