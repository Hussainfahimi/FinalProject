const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/home")
  .get(userController.findAll)
  .post(userController.create);



router.route("/signup")
  .post(userController.create);



router.route("/signin")
.post(userController.signin);

router.route("/")
.post(userController.signin);


// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
