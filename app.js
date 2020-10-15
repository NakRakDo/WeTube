import express from 'express';    
import logger from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';
import globalRouter from './routers/globalRouter';
import routes from "./routes";
import { localsMiddleware } from './middlewares';
const app = express();             


//미들웨어
app.use(helmet());
app.set("view engine", "pug") //view 엔진으로 pug를 쓰겠다. default -> undefined
app.use("/uploads", express.static("uploads")); // 주어진 directory에서 file을 보내주는 middleware
app.use("/static", express.static("static"));
app.use(cookieParser());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended : true})); 
app.use(logger("dev"));
// app.use(function(req, res, next) {
//    res.setHeader("Content-Security-Policy", "script-src 'self' https://archive.org");
//    return next();
// });

// local 변수 -> Global 변수 : 결국 local 기능을 통해 변수에 접근
app.use(localsMiddleware);


 //라우터(응답부분)
 /* app.use -> get, post 모든 http 요청에 반응함 / 
    인자로 경로 안주면 모든 경로에대한 요청에 대해 반응 
    미들웨어로 다음 단계로 보낼 함수를 지정 할 수 있음.
 */
 /*
    app.get -> get 요청에만 반응함
 */

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);       
app.use(routes.videos, videoRouter);

export default app;

