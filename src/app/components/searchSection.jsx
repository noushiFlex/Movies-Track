"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import Card from "./subcomponents/card";
import useFetchMovies from "./subcomponents/api";
import ShinyButton from "@/components/ui/shiny-button";
import useSearchMovies from "./subcomponents/search";

function SearchSection() {
    const { movies: popularMovies, error } = useFetchMovies();
    const [sMovie, setSMovie] = useState("");
    const { movies: searchResults, errors } = useSearchMovies(sMovie);

    const handleSearch = (e) => {
        e.preventDefault();
        const query = document.querySelector("#search-query").value;
        if (query) {
            setSMovie(query);
        } else {
            alert("Veuillez entrer du texte");
        }
    };

    const moviesToDisplay = sMovie ? searchResults : popularMovies;

    return (
        <div>
            <hr />
            <div id="search-section" className="flex w-full max-w-lg mx-auto items-center space-x-2 p-4">
                <Input type="text" id="search-query" placeholder="Recherchez un film..." />
                <ShinyButton onClick={handleSearch}>Chercher</ShinyButton>
            </div>
            {error || errors ? (
                <span className="bg-red-500 p-2 rounded text-white block mx-auto w-fit">
                    Erreur : {error || errors}
                </span>
            ) : null}
            <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {moviesToDisplay &&
                    moviesToDisplay.slice(0, 50).map((movie) => (
                        <Card
                            key={movie.id}
                            title={movie.name || movie.title}
                            rating={movie.vote_average}
                            description={movie.overview}
                            popularity={movie.vote_count}
                            genres={movie.genre_ids.join(", ")}
                            bgPathLink={movie.backdrop_path}
                            poster={movie.poster_path}
                        />
                    ))}
            </div>
        </div>
    );
}

export default SearchSection;
