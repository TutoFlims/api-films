import OmdbApi from "../api/OmdbApi.js";
import type { FilmsRaw } from "../types/films";
import Logger from "../utils/Logger.js";
import Parser from "../utils/Parser.js";
import fs from "fs";

class FilmsListRepositories {
  private readonly logRepo = {
    total: 0,
    upgraded: 0,
    pending: 0,
    failed: 0,
  };

  getAll() {
    try {
      const fileRaw = fs.readFileSync(
        `${process.cwd()}/data/films.json`,
        "utf8",
      );
      const fileData = JSON.parse(fileRaw) as FilmsRaw;

      return fileData;
    } catch {
      return [];
    }
  }

  async upgradeRepositories() {
    Logger.info("Get repositories...");
    const updateData = await this.updateData();
    Logger.info("Updating repositories...");
    await this.upgradeData(updateData);
    Logger.info("Upgraded repositories...");
    Logger.info(`Total: ${this.logRepo.total}`);
    Logger.info(`Upgraded: ${this.logRepo.upgraded}`);
    Logger.info(`Pending: ${this.logRepo.pending}`);
    Logger.info(`Error: ${this.logRepo.failed}`);
    Logger.info("Repositories upgraded!");
  }

  async updateData() {
    try {
      const filmList = this.getAll();
      const filmsTest = fs.readFileSync(
        `${process.cwd()}/data/test.json`,
        "utf8",
      );
      const filmsTestData = JSON.parse(filmsTest) as FilmsRaw;

      this.logRepo.total = filmList.length;

      let index = 0;
      const newFilmsData = filmList.map(async (filmData) => {
        const filmTest = filmsTestData.find(
          (filmTestData) => filmTestData.imdb_id === filmData.imdb_id,
        );

        if (
          filmTest &&
          filmTest.directors?.length > 0 &&
          filmTest.actors?.length > 0
        ) {
          index++;
          return filmTest;
        }

        if (filmData.directors?.length > 0 && filmData.actors?.length > 0) {
          index++;
          return filmData;
        }

        const omdbApi = new OmdbApi();
        const omdbFilm = await omdbApi.getFilmById(filmData.imdb_id);

        if (!omdbFilm) {
          this.logRepo.failed++;

          return filmData;
        }

        index++;
        return {
          ...filmData,
          directors: Parser.directors(omdbFilm?.Director),
          actors: Parser.actors(omdbFilm?.Actors),
        };
      });

      this.logRepo.upgraded = index;
      this.logRepo.pending = this.logRepo.total - index;

      return await Promise.all(newFilmsData);
    } catch (error: unknown) {
      Logger.error(`Error for updating data: ${(error as Error).message}`);
      return [];
    }
  }

  async upgradeData(data: FilmsRaw) {
    try {
      fs.writeFileSync(
        `${process.cwd()}/data/test.json`,
        JSON.stringify(data, null, 2),
      );

      return data;
    } catch (error) {
      Logger.error(`Error for upgrading data: ${(error as Error).message}`);
      return [];
    }
  }
}

export default FilmsListRepositories;
