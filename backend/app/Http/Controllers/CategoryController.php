<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use App\Models\Category;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        ['category' => $category] = $request;
        return Category::with("books")->with("authors")->orderBy("name", "asc")->where('name', 'like', "%$category%")->get();
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
    public function store(StoreCategoryRequest $request)
    {
        $newCategory = $request->only(["name"]);
        try {
            $category = Categoria::create($newCategory);
            if ($category) {
                return ["message" => "Categoria creato con successo", "category" => $category];
            } else {
                return ["message" => "Errore durante la creazione della Categoria", "error" => "Categoria non presente o che cazzo ne so"];
            }
        } catch (\Throwable $th) {
            return ["message" => "Errore durante la creazione della Categoria: ", "error" => $th];
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        return $category->load("authors")->load("books");
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryRequest $request, Category $category)
    {
        $category->name = $request->name;
        $category->update();
        return $category;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        try {
            $category->delete();
            return ["message" => "L'oggetto è stato eliminato con successo"];
        } catch (\Throwable $th) {
            return ["message" => "Si è verificato un errore", "error" => $th];
        }
    }
}
