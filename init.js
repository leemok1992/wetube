// 4000포트 서버를 열었다
// init 에는 app에서 임폴트한 어플리케이션이 있다
import "./db";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();
// eslint-disable-next-line import/first
import "./models/video";
// eslint-disable-next-line import/first
import "./models/user";
// eslint-disable-next-line import/first
import "./models/commentModel";

const PORT = process.env.PORT || 4000;

const handleListening = () => console.log(`dfdfdfdfdf`);

app.listen(PORT, handleListening);
