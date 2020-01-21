//home
const HOME = "/";
const JOIN ="/join";
const LOGIN ="/login";
const LOGOUT ="/logout";
const SEARCH ="/search";

//user
const USERS ="/user";
const USER_DETAIL ="/:id";
const EDIT_PROFILE ="/edit-profile";
const CHANGE_PASSWORD ="/change-password";

//video
const VIDEO ="/video";
const UPLOAD ="/upload";
const VIDEO_DETAIL ="/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
    home:HOME ,
    join:JOIN ,
    login: LOGIN,
    logout:LOGOUT ,
    search: SEARCH,
    user: USERS,
    user_detail: id => {
        if(id) {
            return `/user/${id}`;
        } else {
            return USER_DETAIL;
        }
    },
    EDIT_PROFILE: EDIT_PROFILE,
    CHANGE_PASSWORD: CHANGE_PASSWORD,
    video: VIDEO,
    upload: UPLOAD,
    VIDEO_DETAIL: id =>{
        if (id) {
            return `/video/${id}`
        }else{
            return VIDEO_DETAIL
        }
    },
    EDIT_VIDEO: (id)=>{
        if(id) {
            return `/video/${id}/edit`
        } else {
            return EDIT_VIDEO
        }
    },
     
    DELETE_VIDEO: DELETE_VIDEO,
};

export default routes;