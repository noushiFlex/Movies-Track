"use client";

import { useEffect, useState } from "react";

export default function useSearchMovies(query) {
    const [movies, setMovies] = useState([]);
    const [errors, setErrors] = useState(null);
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    useEffect(() => {
        if (!query) return; // Don't run the search if query is empty

        const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=fr-FR&page=1`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + apiKey,
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => setMovies(json.results)) // Save movies in state
            .catch((err) => {
                console.error(err);
                setErrors(err);
            });
    }, [query]); // Re-run when the search query changes

    return { movies, errors };
}
