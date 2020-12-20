require("dotenv").config();
const { loadControllers, scopePerRequest } = require("awilix-express");
const config = "security-auth";
const morgan = require("morgan");
const container = require("./container");
const { app, express } = container.cradle;

app.set("superSecurity-auth", config);
app.use(morgan("tiny"));
app.use(scopePerRequest(container));
app.use(loadControllers("src/interfaces/http/routes/*.js", { cwd: __dirname }));

const img = require("path").join(__dirname, "src/uploads");

app.use("/public", express.static(img));
app.use(express.json());

const expressSwagger = require("express-swagger-generator")(app);

let options = {
    swaggerDefinition: {
        info: {
            description: "Api Empresta",
            title: "Swagger",
            version: "1.0.0",
        },
        host: "localhost:3000",
        basePath: "/",
        produces: ["application/json", "application/xml"],
        schemes: ["http", "https"],
        securityDefinitions: {
            JWT: {
                type: "apiKey",
                in: "header",
                name: "x-access-token",
                description: "",
            },
        },
    },
    basedir: __dirname, //app absolute path
    files: ["src/interfaces/http/routes/*.js"], //Path to the API handle folder
};
expressSwagger(options);

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        status: error.status,
        message: error.message,
        stack: error.stack,
    });
});
const porta = process.env.PORT || 3000;
app.listen(porta);
