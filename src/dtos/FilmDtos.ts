import type { Film, FilmRaw } from "../types/films";
import logger from "../utils/logger.js";

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
      this.poster = this.parsePoster(data.poster_path);
      this.duration = `${data.runtime} min`;
      this.year = this.parseDate(data.release_date);
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
      console.log(data.release_date);
      logger.error(
        `Error with parse data film ${data.id}, ${(error as Error).message}`,
      );
    }

    return this;
  }

  parseDate(date: string): string {
    try {
      return date.split("-")[0];
    } catch {
      return "N/A";
    }
  }

  parsePoster(poster: string): string {
    try {
      return `https://image.tmdb.org/t/p/original/${
        poster.split("/")[1].split(".")[0]
      }.jpg`;
    } catch {
      return "N/A";
    }
  }
}

export default FilmDtos;
