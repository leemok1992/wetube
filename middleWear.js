import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMidWear = (req, res, next) => {
  res.locals.siteName = "wetube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: false,
    id: 12
  };
  next();
};
// locals함수는 locals.(변수) = value 를 만들어서 프로젝트안 어디서든 사용할수있게 만든다
export const uploadVideo = multerVideo.single("uploadFile");
