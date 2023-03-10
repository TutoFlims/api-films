import type Environments from "../types/environments";

import dotenv from "dotenv";
dotenv.config();

const {
  TMDB_API_KEY: tmdbApiKey,
  TMDB_API_URL: tmdbApiUrl,
  TMDB_URL: tmdbUrl,
  TMBD_IMAGE_URL: tmdbImageUrl,
  IMBD_URL: imdbUrl,
  FILMS_LIST_URL: filmsListUrl,
  OMDBAPI_API_KEY: omdbApiKey,
  OMDBAPI_API_URL: omdbApiUrl,
  PORT: port,
} = process.env;

const environments: Environments = {
  tmdbApiKey: tmdbApiKey!,
  tmdbApiUrl: tmdbApiUrl!,
  tmdbUrl: tmdbUrl!,
  tmdbImageUrl: tmdbImageUrl!,
  imdbUrl: imdbUrl!,
  filmsListUrl: filmsListUrl!,
  omdbApiKey: omdbApiKey!,
  omdbApiUrl: omdbApiUrl!,
  port: +port! || 3002,
};

export default environments;
