"use client";

import { useState, useEffect } from "react";

export default function useFetchMovies() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    const apiKey = process.env.NEXT_PUBLIC_cleeAPI;

    const urlAPI = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc';
    const optionsAPI = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ` + apiKey  // Accéder à la clé API
        }
    };

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(urlAPI, optionsAPI);
                if (!response.ok) throw new Error("Erreur lors de la récupération des films");
                const data = await response.json();
                setMovies(data.results);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchMovies();
    }, []);

    return { movies, error };
}
