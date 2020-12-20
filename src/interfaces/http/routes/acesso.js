const { createController } = require("awilix-express"); // or `awilix-router-core`
const AcessoController = require("../controllers/AcessoController");
const authenticate = require("../middlewares/authentication");

module.exports = createController(AcessoController)
    .prefix("/acesso")
    // .before([authenticate])
    .post("/", "createAcesso")
    // .before([authenticate])
    .get("/:id", "getAcesso")
    // .before([authenticate])
    .get("/", "getAll")
    // .before([authenticate])
    .put("/", "updateAcesso")
    // .before([authenticate])
    .delete("/", "deleteAcesso")
    // .before([authenticate]);
