import FilmControllers from "../../controllers/FilmControllers.js";
import routes from "../../utils/routes.js";
import { Router } from "express";

const filmController = new FilmControllers();
const filmRouter = Router();
const { film } = routes;

filmRouter.get(film.film, filmController.getFilmById);

export default filmRouter;
