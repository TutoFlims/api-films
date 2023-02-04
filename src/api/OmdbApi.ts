import type { FilmRawOmdbApi } from "../types/films.js";
import Logger from "../utils/Logger.js";
import environments from "../utils/loadEnvironments.js";
import axios from "axios";

const { omdbApiKey, omdbApiUrl } = environments;

class OmdbApi {
  async getFilmById(id: string): Promise<FilmRawOmdbApi | undefined> {
    try {
      const response = await axios.get<FilmRawOmdbApi>(
        `${omdbApiUrl}?apikey=${omdbApiKey}&i=${id}`,
      );
      if (response.status !== 200) throw new Error(response.statusText);
      const resposneData = response.data;

      return resposneData;
    } catch (error: unknown) {
      Logger.error(`Error getting film by id ${(error as Error).message}`);
      return undefined;
    }
  }
}

export default OmdbApi;
