import type { FilmRawOmdbApi } from "../types/films.js";
import Logger from "../utils/Logger.js";
import environments from "../utils/loadEnvironments.js";
import fetch from "node-fetch";

const { omdbApiKey, omdbApiUrl } = environments;

class OmdbApi {
  async getFilmById(id: string): Promise<FilmRawOmdbApi | undefined> {
    try {
      const response = await fetch(
        `${omdbApiUrl}?apikey=${omdbApiKey}&i=${id}`,
      );
      if (response.status !== 200) throw new Error(response.statusText);
      const resposneData = (await response.json()) as FilmRawOmdbApi;

      return resposneData;
    } catch (error: unknown) {
      Logger.error(`Error getting film by id ${(error as Error).message}`);
      return undefined;
    }
  }
}

export default OmdbApi;
