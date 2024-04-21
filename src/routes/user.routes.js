import { Router } from "express";
import {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentUser,
    updateAccountDetails,
    updateAccountDetails,
    updateUserAvatar,
    updateUserCoverImage
} from '../controllers/user.controllers.js'
import { upload } from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
    upload.fields([
        {
            name: "avatar", maxCount: 1
        },
        {
            name: "coverImage", maxCount: 1
        },
    ]),
    registerUser
)
router.route("/login").post(loginUser)

//secured routes
router.route("/logout").post(verifyJWT, logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/change-password").post(verifyJWT,changeCurrentPassword)
router.route("/current-user").get(verifyJWT,getCurrentUser)

// TODO : Test below routes
// DELETE: delete avatar or coverImage from cloudinary after update a new one
router.route("/update-user-details").put(verifyJWT,updateAccountDetails)
router.route("/update-user-avatar").put(verifyJWT,updateUserAvatar)
router.route("/update-user-coverImage").put(verifyJWT,updateUserCoverImage)

export default router