"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Card from "./subcomponents/card";
import useFetchMovies from "./subcomponents/api";

function SearchSection() {
    const { movies, error } = useFetchMovies();

    return (
        <div>
            <hr />
            <div className="flex w-full max-w-sm items-center space-x-2 p-10">
                <Input type="email" placeholder="Recherchez un film..." />
                <Button type="submit">Chercher</Button>
            </div>
            {error && (
                <span className="bg-red-500 p-2 rounded text-white">
                    Erreur : {error}
                </span>
            )}
            <div className="p-10 grid grid-cols-2 gap-5">
                {movies.slice(0, 20).map((movie) => (
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
