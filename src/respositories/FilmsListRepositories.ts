import type { FilmsRaw } from "../types/films";
import fs from "fs";

class FilmsListRepositories {
  async getAll() {
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
}

export default FilmsListRepositories;
