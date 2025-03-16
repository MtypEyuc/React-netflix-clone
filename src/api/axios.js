import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",

    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`,
        accept: "application/json",
    },

    params: {
        api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
        language: "ko-KR",
    },
});

export default instance;
