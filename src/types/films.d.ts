export type Films = Film[];

export interface Film {
  id: number;
  imdbId: string;
  title: string;
  original: {
    title: string;
    language: string;
  };
  synopsis: string;
  poster: string;
  duration: string;
  year: string;
  genres: string[];
  directors: string[];
  actors: string[];
  productionCompanies: string[];
  homepage: {
    themoviedb: string;
    imdb: string;
  };
}

export type FilmsRaw = FilmRaw[];

export interface FilmRaw {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: Array<{
    id: number;
    name: string;
  }>;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<{
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }>;
  production_countries: Array<{
    iso_3166_1: string;
    name: string;
  }>;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<{
    english_name: string;
    iso_639_1: string;
    name: string;
  }>;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
