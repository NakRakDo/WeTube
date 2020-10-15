import express from 'express';
import { deleteVideo, getEditVideo, getUpload, postEditVideo, postUpload, videoDetail, videos } from '../controllers/videoController';
import { uploadVideo } from '../middlewares';
import routes from '../routes';

const videoRouter = express.Router();

//videoRouter.get(routes.videos, videos);//
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;

//export default -> 파일로 export하는것

//export const ```` => 해당 변수만 export하는것.