import express from "express";
import routes from "../routes";
import { startUpload, upload, videoDetail, EDITVIDEO, DELETEVIDEO, postUpload , getUpload, getEDITVIDEO, postEDITVIDEO} from "../controller/videoController";
import { uploadVideo } from "../middleWear";

const videoRouter = express.Router();

videoRouter.get(routes.upload , getUpload);

videoRouter.post(routes.upload , uploadVideo, startUpload);
videoRouter.get(routes.VIDEO_DETAIL() ,videoDetail);
//edit video
videoRouter.get(routes.EDIT_VIDEO() ,getEDITVIDEO);
videoRouter.post(routes.EDIT_VIDEO() ,postEDITVIDEO)

videoRouter.get(routes.DELETE_VIDEO() ,DELETEVIDEO);

export default videoRouter;