import routes from "./routes";
import multer from 'multer';

const multerVideo = multer({ dest: 'uploads/videos/' }); // 맨앞에 /를 붙히면 컴푸터의 root로 인식한다.

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = 'WeTube';
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    };
    next();
};

export const uploadVideo = multerVideo.single('videoFile'); //single은 오직 하나의 파일만 Upload 가능하다는것을 의미.