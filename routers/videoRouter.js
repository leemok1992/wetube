import express from "express";
import routes from "../routes";
import { video, upload, videoDetail, EDITVIDEO, DELETEVIDEO } from "../controller/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.video,video);
videoRouter.get(routes.upload ,upload);
videoRouter.get(routes.VIDEO_DETAIL ,videoDetail);
videoRouter.get(routes.EDIT_VIDEO ,EDITVIDEO);
videoRouter.get(routes.DELETE_VIDEO ,DELETEVIDEO);

export default videoRouter;