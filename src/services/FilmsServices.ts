import FilmDtos from "../dtos/FilmDtos.js";
import FilmsListRepositories from "../respositories/FilmsListRepositories.js";
import type { Film } from "../types/films";

class FilmsServices {
  async getFilms(): Promise<Film[]> {
    const filmsListRepositories = new FilmsListRepositories();
    const filmsList = await filmsListRepositories.getAll();

    const films = filmsList.map((filmRaw) => {
      const filmDto = new FilmDtos();
      const data = filmDto.parseData(filmRaw);

      return data;
    });

    return films;
  }
}

export default FilmsServices;
