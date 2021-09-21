export interface ResponsePageable{
    page: number;
    results: Array<Midia>;
    total_pages: number;
    total_results: number;
}

export interface SeriesDetalhes{
    backdrop_path: string;
    created_by: Array<any>;
    episode_run_time: Array<any>;
    first_air_date: string;
    genres: Array<any>;
    homepage: string;
    id: number;
    in_production: boolean;
    languages: Array<any>;
    last_air_date: string;
    last_episode_to_air: Array<any>;
    name: string;
    next_episode_to_air: Array<any>
    networks: Array<any>
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: Array<any>
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Array<any>
    production_countries: Array<any>
    seasons: Array<any>;
    spoken_languages: Array<any>
    status: string;
    tagline: string;
    type: string;
    vote_average: number;
    vote_count: number;
}

export interface Midia{
    adult: boolean;
    backdrop_path: string;
    genre_ids: Array<Genre>
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface FilmeDetalhes{
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: any[];
    budget: number;
    genres: Array<Genres>
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: any[];
    production_countries: any[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: any[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface Genre{
    id: number;
}

interface Genres{
    id: number;
    name: string;
}