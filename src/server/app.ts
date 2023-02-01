import routes from "../utils/routes.js";
import { generalError } from "./middlewares/errors.js";
import filmRouter from "./routers/filmRouter.js";
import filmsRouter from "./routers/filmsRouter.js";
import homeRouter from "./routers/homeRouter.js";
import express from "express";
import morgan from "morgan";

const app = express();

app.disable("x-powered-by");
app.use(morgan("dev"));
app.use(express.json());

app.use(routes.home.root, homeRouter);
app.use(routes.film.root, filmRouter);
app.use(routes.films.root, filmsRouter);

app.use(generalError);

export default app;
