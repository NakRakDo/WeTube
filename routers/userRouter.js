import express from 'express';
import { changePassword, editProfile, userDetail, users } from '../controllers/userController';
import routes from '../routes';

const userRouter = express.Router();

//userRouter.get(routes.users, users);
userRouter.get(routes.editProfile, editProfile); // 얘가 user detail 보다 아래에 있으면 routes 에 user detail 경로 /:id가 edit-profile을 id인식한다. 순서 중요.
userRouter.get(routes.userDetail(), userDetail); 
userRouter.get(routes.changePassword, changePassword);

export default userRouter;