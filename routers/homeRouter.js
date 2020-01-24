import express from "express";
import routes from "../routes";
import { home, search } from "../controller/videoController";
import { login, logout, tryJoin, joined } from "../controller/userController";

const homeRouter = express.Router();

homeRouter.get(routes.home, home);

homeRouter.get(routes.join, tryJoin);
homeRouter.post(routes.join, joined);

homeRouter.get(routes.login, login);

homeRouter.get(routes.logout, logout);

homeRouter.get(routes.search, search);

export default homeRouter;
