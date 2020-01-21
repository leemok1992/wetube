import express from "express";
import routes from "../routes";
import { startUpload, upload, videoDetail, EDITVIDEO, DELETEVIDEO, postUpload , getUpload} from "../controller/videoController";
import { uploadVideo } from "../middleWear";

const videoRouter = express.Router();

videoRouter.get(routes.upload , getUpload);
videoRouter.post(routes.upload , uploadVideo, startUpload);
videoRouter.get(routes.VIDEO_DETAIL() ,videoDetail);
videoRouter.get(routes.EDIT_VIDEO ,EDITVIDEO);
videoRouter.get(routes.DELETE_VIDEO ,DELETEVIDEO);

export default videoRouter;