import express from "express";
import routes from "../routes";
import { home, search } from "../controller/videoController";
import {
  logout,
  tryJoin,
  joined,
  getLogin,
  postLogin
} from "../controller/userController";
import { onlyPublic, olnyPrivate } from "../middleWear";

const homeRouter = express.Router();

homeRouter.get(routes.home, home);

homeRouter.get(routes.join, onlyPublic, tryJoin);
homeRouter.post(routes.join, onlyPublic, joined, postLogin);

homeRouter.get(routes.login, onlyPublic, getLogin);
homeRouter.post(routes.login, onlyPublic, postLogin);

homeRouter.get(routes.logout, olnyPrivate, logout);

homeRouter.get(routes.search, search);

export default homeRouter;
