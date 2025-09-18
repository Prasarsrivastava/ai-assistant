import e from "express";
import isAuth from "../middlewares/isAuth.js";
import { getCurrentUser} from "../controllers/user.controllers.js";
const userRouter=e.Router()
userRouter.get("/current",getCurrentUser)
export default userRouter