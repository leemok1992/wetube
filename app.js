//app의 미드웨어 관리와 app 실행
//app파일에서 express를 임폴트해서 express를 실행한 결과를 app상수로 만들었다 
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import badyParser from "body-parser";

//routers
import userRouter from "./routers/userRouter";
import homeRouter from "./routers/homeRouter";
import videoRouter from "./routers/videoRouter";
import routes from "./routes";
import { localsMidWear } from "./middleWear";
const app = express();

//쿠키를 전달받아서 사용할수있도록한다 사용자 인증 같은 곳에서 쿠키를 검사할때사용
app.use(cookieParser());
//badyparser은 사용자가 웹사이트로 전달하는 정볻ㄹ을 검사하는 미들웨어
// req정보에서 from이나 json 형태로 된 바디를 검사 
app.use(helmet());
app.use(badyParser.json());
app.use(badyParser.urlencoded({extended: true}));
app.use(morgan("dev"));
app.set("view engine","pug");
//작업하는html 의 위치는 /views 로 해야한다
//pug install = !-npm install pug
//app.set함수 에는 name과 value가 필요하다
//set은 어플리케이션 설정을 하는 함수
//우리는 set을 이용하여 view engine 설정을 바꿀것이다 app.set("view engine","pug")
app.use(localsMidWear);

app.use(routes.user, userRouter);
app.use(routes.home, homeRouter);
app.use(routes.video, videoRouter);



export default app;
