const fs = require("fs");

module.exports = async (base64Pdf) => {
    const formattedBase64 = base64Pdf.replace(
        "data:application/pdf;base64,",
        ""
    );
    const buff = Buffer.from(formattedBase64, "base64");

    // fs.writeFileSync("./file.pdf", buff);
};
