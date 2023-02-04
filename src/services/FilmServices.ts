import FilmDtos from "../dtos/FilmDtos.js";
import FilmsListRepositories from "../respositories/FilmsListRepositories.js";
import type { Film } from "../types/films";

class FilmServices {
  async getFilmById(id: number): Promise<Film | undefined> {
    const filmsListRepositories = new FilmsListRepositories();
    const filmsList = filmsListRepositories.getAll();

    const filmRaw = filmsList.find((filmData) => filmData.id === id);
    if (!filmRaw) return;

    const filmDto = new FilmDtos();
    const data = filmDto.parseData(filmRaw);

    return data;
  }
}

export default FilmServices;
