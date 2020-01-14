//사용자에 대해서 컨트롤  라우터에있는 함수를 여기에서 정리
export const join = (req,res) => res.render("join");
export const login = (req,res) => res.render("login");
export const logout = (req,res) => res.render("logout");
export const user =(req,res) => res.render("user");
export const userDetail =(req,res) => res.render("userDetail");
export const EDITPROFILE =(req,res) => res.render("profile");
export const CHANGEPASSWORD =(req,res) => res.render("changePassword");