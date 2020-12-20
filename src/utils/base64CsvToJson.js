const fs = require("fs");
const csv = require("csvtojson");

module.exports = async (base64Csv) => {
    const formattedBase64 = base64Csv.replace("data:text/csv;base64,", "");
    const buff = Buffer.from(formattedBase64, "base64");

    fs.writeFileSync("./funcionario.csv", buff);

    const json = await csv().fromFile("./funcionario.csv");

    fs.unlinkSync("./funcionario.csv");

    return json;
};
