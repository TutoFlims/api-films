import CustomError from "../utils/CustomError.js";
import FilmServices from "../services/FilmServices.js";
import type { NextFunction, Request, Response } from "express";

class FilmControllers {
  async getFilmById(req: Request, res: Response, next: NextFunction) {
    const { filmId } = req.params as {
      filmId: string;
    };

    try {
      const filmService = new FilmServices();
      const film = await filmService.getFilmById(+filmId);

      if (!film) {
        throw new CustomError(
          `The film searched by id (${filmId}) provided does not exist`,
          "The film searched does not exist",
          404,
        );
      }

      return res.status(200).json(film);
    } catch (error: unknown) {
      const customError = new CustomError(
        (error as Error).message,
        (error as CustomError).publicMessage || "Error when find the film",
        (error as CustomError).statusCode ?? 500,
      );

      next(customError);
    }
  }
}

export default FilmControllers;
