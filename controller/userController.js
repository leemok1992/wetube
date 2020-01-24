import routes from "../routes";
import userModel from "../models/user";

// 사용자에 대해서 컨트롤  라우터에있는 함수를 여기에서 정리

export const tryJoin = (req, res) => res.render("join", { pagetitle: "join" });

export const joined = async (req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pagetitle: "join" });
  } else {
    try {
      const user = await userModel({
        name,
        email
      });
      await userModel.register(user, password);
    } catch (error) {
      console.log(error);
    }
    res.redirect(routes.home);
  }
};

export const login = (req, res) => res.render("login");

export const logout = (req, res) => res.render("logout");

export const user = (req, res) => res.render("user");

export const userDetail = (req, res) => res.render("userDetail");

export const EDITPROFILE = (req, res) => res.render("profile");

export const CHANGEPASSWORD = (req, res) => res.render("changePassword");
