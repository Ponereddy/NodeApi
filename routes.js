const express= require("express");
const router = express.Router();
const {
    getUsersDetails,
    getUserDetails,
    createUser,
    updateUser,
    deleteUser
} = require("./Controller/userController");

router.route('/getUsersDetails').get(getUsersDetails);
router.route("/getUserDetails/:id").get(getUserDetails)
router.route("/createUser").post(createUser);
router.route("/updateUser/:id").put(updateUser);
router.route("/deleteUser/:id").delete(deleteUser)
module.exports=router;