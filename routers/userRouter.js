//route url을 나눠서 정리하는것이 좋다  user url 관련
import express from "express";
import routes from "../routes";
import { user, userDetail, EDITPROFILE, CHANGEPASSWORD } from "../controller/userController";

const userRouter = express.Router();
//export한 모듈을 사용할수있다 vsc의 예시에 import
//긴 함수의 결과값을 콘트롤러 파일을 만들어서 따로정리
userRouter.get(routes.user,user);
userRouter.get(routes.user_detail,userDetail);
userRouter.get(routes.EDIT_PROFILE,EDITPROFILE);
userRouter.get(routes.CHANGE_PASSWORD,CHANGEPASSWORD);

export default userRouter;