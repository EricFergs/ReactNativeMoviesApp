export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}


export const fetchMovies = async ({ query }: { query: string }) => {
    const endpoint = query
        ? `/search/movie?query=${encodeURIComponent(query)}`
        :'/discover/movie?sort_by=popularity.desc';

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers
    })

    if (!response.ok) {
        // @ts-ignore
        throw new Error('Faioled to fetch movies', response.statusText);
    }

    const data = await response.json();

    return data.results;
}

const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGQ3NWUyNTE5ZmQzMjc2ZmJmODQxOWJhODU5ZTBlYiIsIm5iZiI6MTc1MDU0NjAwNy4wNzEsInN1YiI6IjY4NTczNjU3NmI1N2M4MTg0NDAzNjgyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g6VGeFhRb1laijM98WwRlh2-rmm0ivT3NKIlJobixHI'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));