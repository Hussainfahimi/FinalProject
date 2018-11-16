const router = require("express").Router();
const userRoutes = require("./user");
//const driverRoutes = require("./driver");

// user routes
router.use("/user", userRoutes);
//srouter.use("/driver", driverRoutes);

module.exports = router;
