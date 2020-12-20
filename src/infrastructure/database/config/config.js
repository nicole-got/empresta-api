module.exports = {
    local: {
        username: process.env.DB_LOCAL_USER,
        password: "",
        database: process.env.DB_LOCAL_NAME,
        host: process.env.DB_LOCAL_HOST,
        dialect: "mysql",
        operatorsAliases: 0,
        define: {
            timestamps: false,
        },
    },
    development: {
        username: "novousuario",
        password: "Abc@123456789#",
        database: "db_biocentro_dev",
        host: "localhost",
        port: "3306",
        dialect: "mysql",
        operatorsAliases: 0,
        define: {
            timestamps: false,
        },
    },
    test: {
        username: process.env.DB_TEST_USER,
        password: process.env.DB_TEST_PASSWORD,
        database: process.env.DB_TEST_NAME,
        host: process.env.DB_TEST_HOST,
        port: process.env.DB_TEST_PORT,
        dialect: "mysql",
        operatorsAliases: 0,
        define: {
            timestamps: false,
        },
    },
    production: {
        username: process.env.DB_PROD_USER,
        password: process.env.DB_PROD_PASSWORD,
        database: process.env.DB_PROD_NAME,
        host: process.env.DB_PROD_HOST,
        port: process.env.DB_PROD_PORT,
        dialect: "mysql",
        operatorsAliases: 0,
        define: {
            timestamps: false,
        },
    },
};
