const { createController } = require("awilix-express"); // or `awilix-router-core`
const UserController = require("../controllers/UserController");

module.exports = createController(UserController)
    .prefix("/user")
    .get("/:id", "getUser")
    .put("/", "updateUser")
    .post("/", "createUser");
