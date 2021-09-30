export class ResponsePageableFilmes{
    constructor(
        public page: number,
        public results: Array<Filme>,
        public total_pages: number,
        public total_results: number,
    ){}
}

export class ResponsePageableSeries{
    constructor(
        public page: number,
        public results: Array<Serie>,
        public total_pages: number,
        public total_results: number,
    ){}
}

export class ResponsePageableMidias{
    constructor(
        public page: number,
        public results: Array<Midia>,
        public total_pages: number,
        public total_results: number,
    ){}
}

export class SeriesDetalhes{
    constructor(
        public backdrop_path: string,
        public created_by: Array<any>,
        public episode_run_time: Array<any>,
        public first_air_date: string,
        public genres: Array<any>,
        public homepage: string,
        public id: number,
        public in_production: boolean,
        public languages: Array<any>,
        public last_air_date: string,
        public last_episode_to_air: Array<any>,
        public name: string,
        public next_episode_to_air: Array<any>,
        public networks: Array<any>,
        public number_of_episodes: number,
        public number_of_seasons: number,
        public origin_country: Array<any>,
        public original_language: string,
        public original_name: string,
        public overview: string,
        public popularity: number,
        public poster_path: string,
        public production_companies: Array<any>,
        public production_countries: Array<any>,
        public seasons: Array<any>,
        public spoken_languages: Array<any>,
        public status: string,
        public tagline: string,
        public type: string,
        public vote_average: number,
        public vote_count: number,
    ){}
}

export class Filme{
    constructor(
        public media : string,
        public adult: boolean,
        public backdrop_path: string,
        public genre_ids: Array<Genre>,
        public id: number,
        public original_language: string,
        public original_title: string,
        public overview: string,
        public popularity: number,
        public poster_path: string,
        public release_date: string,
        public title: string,
        public video: boolean,
        public vote_average: number,
        public vote_count: number,
    ){ }
}

export class Serie{
    constructor(
        public media : string,
        public backdrop_path: string,
        public first_air_date: string,
        public genre_ids: Array<Genre>,
        public id: number,
        public name: string,
        public origin_country: Array<any>,
        public original_language: string,
        public original_name: string,
        public overview: string,
        public popularity: number,
        public poster_path: string,
        public vote_average: number,
        public vote_count: number,
    ){ }
}

export class Midia{
    constructor(
        public adult: boolean,
        public backdrop_path: string,
        public genre_ids: Array<Genre>,
        public id: number,
        public media_type: string,
        public original_language: string,
        public original_title: string,
        public overview: string,
        public popularity: number,
        public poster_path: string,
        public release_date: string,
        public title: string,
        public video: boolean,
        public vote_average: number,
        public vote_count: number,
    ){ }
}

export class FilmeDetalhes{
    constructor(
        public adult: boolean,
        public backdrop_path: string,
        public belongs_to_collection: any[],
        public budget: number,
        public genres: Array<Genres>,
        public homepage: string,
        public id: number,
        public imdb_id: string,
        public original_language: string,
        public original_title: string,
        public overview: string,
        public popularity: number,
        public poster_path: string,
        public production_companies: any[],
        public production_countries: any[],
        public release_date: string,
        public revenue: number,
        public runtime: number,
        public spoken_languages: any[],
        public status: string,
        public tagline: string,
        public title: string,
        public video: boolean,
        public vote_average: number,
        public vote_count: number,
    ){}
}

interface Genre{
    id: number;
}

interface Genres{
    id: number;
    name: string;
}