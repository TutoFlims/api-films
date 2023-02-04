import type { Film, FilmRaw } from "../types/films";
import Logger from "../utils/Logger.js";
import Parser from "../utils/Parser.js";

class FilmDtos implements Film {
  id: number;
  imdbId: string;
  title: string;
  original: { title: string; language: string };
  synopsis: string;
  poster: string;
  duration: string;
  year: string;
  genres: string[];
  directors: string[];
  actors: string[];
  productionCompanies: string[];
  homepage: { themoviedb: string; imdb: string };

  parseData(data: FilmRaw) {
    try {
      this.id = data.id;
      this.imdbId = data.imdb_id;
      this.title = data.title;
      this.original = {
        title: data.original_title,
        language: data.original_language,
      };
      this.poster = Parser.poster(data.poster_path);
      this.duration = `${data.runtime} min`;
      this.year = Parser.date(data.release_date);
      this.genres = data.genres.map((genre) => genre.name);
      this.directors = []; // Obtener desde API
      this.actors = []; // Obtener desde API
      this.productionCompanies = data.production_companies.map(
        (companie) => companie.name,
      );
      this.synopsis = data.overview;
      this.homepage = {
        themoviedb: `https://www.themoviedb.org/movie/${data.id}`,
        imdb: `https://www.imdb.com/title/${data.imdb_id}`,
      };
    } catch (error: unknown) {
      Logger.error(
        `Error with parse data film ${data.id}, ${(error as Error).message}`,
      );
    }

    return this;
  }
}

export default FilmDtos;
