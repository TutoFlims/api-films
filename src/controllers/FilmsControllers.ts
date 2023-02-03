import CustomError from "../utils/CustomError.js";
import FilmsServices from "../services/FilmsServices.js";
import type { NextFunction, Request, Response } from "express";

class FilmController {
  async getFilms(req: Request, res: Response, next: NextFunction) {
    try {
      const filmsServices = new FilmsServices();
      const films = await filmsServices.getFilms();

      return res.status(200).json(films);
    } catch (error: unknown) {
      const customError = new CustomError(
        (error as Error).message,
        (error as CustomError).publicMessage || "Error when find the films",
        (error as CustomError).statusCode ?? 500,
      );

      next(customError);
    }
  }
}

export default FilmController;
