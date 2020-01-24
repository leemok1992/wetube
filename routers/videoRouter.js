import express from "express";
import routes from "../routes";
import {
  startUpload,
  videoDetail,
  DELETEVIDEO,
  getUpload,
  getEDITVIDEO,
  postEDITVIDEO
} from "../controller/videoController";
import { uploadVideo, olnyPrivate } from "../middleWear";

const videoRouter = express.Router();

videoRouter.get(routes.upload, olnyPrivate, getUpload);

videoRouter.post(routes.upload, olnyPrivate, uploadVideo, startUpload);
videoRouter.get(routes.VIDEO_DETAIL(), videoDetail);
// edit video
videoRouter.get(routes.EDIT_VIDEO(), olnyPrivate, getEDITVIDEO);
videoRouter.post(routes.EDIT_VIDEO(), olnyPrivate, postEDITVIDEO);

videoRouter.get(routes.DELETE_VIDEO(), DELETEVIDEO);

export default videoRouter;
