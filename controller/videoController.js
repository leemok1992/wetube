export const home = (req,res) => res.render("Home",{pageTitle:"home"});

export const search = (req,res) => {
    const{
        query: { term: searchingBy}
    } = req;
    res.render("search", {searchingBy});
} 

export const video = (req,res) => res.render("video");

export const upload = (req,res) => res.render("upload");

export const videoDetail = (req,res) => res.render("videoDetail");

export const EDITVIDEO = (req,res) => res.render("editVideo");

export const DELETEVIDEO = (req,res) => res.render("deleteVideo");

//export한것들은 VSC에서 임폴트할수있는 기능이 있다
//컨트롤러 url 함수를 정리 