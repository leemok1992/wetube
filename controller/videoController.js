import videoModel from "../models/video";
import routes from "../routes";

export const home = async (req, res) => {
  try {
    const foundVideo = await videoModel.find({}).sort({ _id: -1 });
    console.log(foundVideo);
    res.render("home", { pageTitle: "Home", foundVideo });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", foundVideo: [] });
  }
};
// 비디오 찾기
export const search = async (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  let videos = [];
  try {
    videos = await videoModel.find({
      title: { $regex: searchingBy, $options: "1" }
    });
  } catch (error) {
    console.log(error);
  }
  res.render("search", { pageTitle: "Home", searchingBy, videos });
};
// 업로드
export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "upload" });

export const startUpload = async (req, res) => {
  const {
    body: { videoTitle, description },
    file: { path }
  } = req;
  const NewVideo = await videoModel.create({
    fileUrl: path,
    title: videoTitle,
    description
  });
  console.log(NewVideo);
  res.redirect(routes.VIDEO_DETAIL(NewVideo.id));
};
// 비디오 디테일
export const videoDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const foundvideo = await videoModel.findById(id);
    res.render("videoDetail", { pageTitle: "videoDetail", foundvideo });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const getEDITVIDEO = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await videoModel.findById(id);
    res.render("editVideo", { pageTitle: "edit video", video });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postEDITVIDEO = async (req, res) => {
  const {
    params: { id },
    body: { title, description }
  } = req;
  try {
    await videoModel.findOneAndUpdate({ _id: id }, { title, description });
    res.redirect(routes.VIDEO_DETAIL(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const DELETEVIDEO = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    await videoModel.findOneAndRemove({ _id: id });
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};

// export한것들은 VSC에서 임폴트할수있는 기능이 있다
// 컨트롤러 url 함수를 정리
