
import videoModel from"../models/video";
import routes from "../routes";

export const home = async (req, res) => {
    try{
        const foundVideo = await videoModel.find({});
        console.log(foundVideo);
        res.render("home", { pageTitle: "Home", foundVideo });
    } catch (error) {
        console.log(error);
        res.render("home", { pageTitle: "Home", foundVideo : [] });
    }
};

export const search = (req,res) => {
    const{
        query: { terml: searchingBy}
    } = req;
    res.render("search", { pageTitle: "Home", searchingBy});
};

export const getUpload = (req,res) => res.render("upload", {pageTitle : "upload"});

export const startUpload = async(req,res) => {
        const {
            body : {videoTitle,description},
            file : {path}
    } = req;
        const NewVideo = await videoModel.create({
            fileUrl: path,
            title: videoTitle,
            description
        });
        console.log(NewVideo);
        res.redirect(routes.VIDEO_DETAIL(NewVideo.id))
}

export const videoDetail = (req,res) => res.render("videoDetail");

export const EDITVIDEO = (req,res) => res.render("editVideo");

export const DELETEVIDEO = (req,res) => res.render("deleteVideo");

//export한것들은 VSC에서 임폴트할수있는 기능이 있다
//컨트롤러 url 함수를 정리 