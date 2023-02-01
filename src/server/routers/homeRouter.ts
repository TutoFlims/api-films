import HomeControllers from "../../controllers/HomeControllers.js";
import routes from "../../utils/routes.js";
import { Router } from "express";

const homeControllers = new HomeControllers();
const homeRouter = Router();
const { home } = routes;

homeRouter.get(home.ping, homeControllers.getPing);
homeRouter.get(home.endpoints, homeControllers.getEndpoints);

export default homeRouter;
