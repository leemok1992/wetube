import express from "express";
import routes from "../routes";
import { home, search } from "../controller/videoController";
import { join, login, logout } from "../controller/userController";



const homeRouter = express.Router();




homeRouter.get(routes.home,home);
homeRouter.get(routes.join,join);
homeRouter.get(routes.login,login);
homeRouter.get(routes.logout,logout);
homeRouter.get(routes.search,search);


export default homeRouter;
