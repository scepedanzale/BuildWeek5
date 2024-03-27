<?php

use Carbon\Carbon;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();

            $table->string("title");
            $table->year('year');
            $table->integer("available_copies")->default(1);
            $table->string("cover_url")
            ->default("https://i.pinimg.com/736x/b5/d7/ed/b5d7edaf6d61091281f348fb1e66efc8.jpg");
            $table->text("abstract");
            $table->foreignId('author_id');
            $table->foreign('author_id')->on('authors')->references('id')
            ->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('category_id');
            $table->foreign('category_id')->on('categories')->references('id')
            ->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
