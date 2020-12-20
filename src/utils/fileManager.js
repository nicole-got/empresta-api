const fs = require("fs");
const path = require("path");
const csv = require("csvtojson");

module.exports = {
    saveFile(dirName, fileName, id, file) {
        const date_now = new Date();
        const date_month = date_now.getMonth() + 1;

        const ext = path.extname(file.name);

        const fileNameFormatted =
            `${fileName}` +
            "_" +
            date_month +
            "" +
            date_now.getDate() +
            "" +
            date_now.getHours() +
            "" +
            date_now.getMinutes() +
            "" +
            date_now.getMilliseconds() +
            "_" +
            id;

        const p = path.join(
            __dirname,
            `/../uploads/${dirName}/${fileNameFormatted}${ext}`
        );

        var rawData = fs.readFileSync(file.path);

        fs.writeFileSync(p, rawData);

        return {
            name: fileNameFormatted,
            type: ext.replace(".", ""),
            path: `${dirName}/${fileNameFormatted}${ext}`,
        };
    },
    readFile(dirName, fileName, id) {
        const p = path.join(__dirname, `/../uploads/${dirName}`);

        const files = fs.readdirSync(p);

        const file = files.find((f) => f.includes(fileName) && f.includes(id));

        return fs.readFileSync(p + "/" + file);
    },
    deleteFile(dirName, fileName, id) {
        const p = path.join(__dirname, `/../uploads/${dirName}`);

        const files = fs.readdirSync(p);

        const filteredFiles = files.filter(
            (f) => f.includes(fileName) && f.includes(id)
        );

        if (filteredFiles.length > 0)
            filteredFiles.forEach((f) => fs.unlinkSync(`${p}/${f}`));
    },

    async csvToJson(file) {
        return await csv().fromFile(file.path);
    },
};
