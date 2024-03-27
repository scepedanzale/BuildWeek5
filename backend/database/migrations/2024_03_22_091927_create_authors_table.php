<?php

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
        $biografiaDefault ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero vel totam nulla, enim deserunt sequi exercitationem nobis corrupti quidem maxime, impedit laudantium illum saepe sapiente sint reprehenderit aliquam aperiam tempore!";
        $biografiaDefault.=$biografiaDefault.$biografiaDefault;

        Schema::create('authors', function (Blueprint $table) {
            $table->id();
            $table->string('full_name');
            $table->year('year');
            $table->string('country');
            $table->longText("biography");
            $table->string("profile_img")->default("https://theworldmaker.com/wp-content/uploads/2022/08/Placeholder-Team-Image.jpg");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('authors');
    }
};
