const express = require("express")
const router = express.Router()


const {
    createUser,
    getAllUsers,
    updateUser,
    deleteUser,
  } = require("../controllers/users.js"); 

router.route("/getallusers").get(getAllUsers)

router.route("./createuser").post(createUser)

router.route("/:userid")
.put(updateUser)
.delete(deleteUser)

// CONSOLE LOGGED ID WHENEVER REQUEST WITH PARAM IS SENT
router.param("userid",(req,res,next,id)=>{
    console.log(`id is ${id}`);
    next();
})

module.exports = router;