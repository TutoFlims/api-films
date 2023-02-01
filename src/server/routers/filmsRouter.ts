import FilmsControllers from "../../controllers/FilmsControllers.js";
import routes from "../../utils/routes.js";
import { Router } from "express";

const filmsControllers = new FilmsControllers();
const filmsRouter = Router();
const { films } = routes;

filmsRouter.get(films.list, filmsControllers.getFilms);

export default filmsRouter;
