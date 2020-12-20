"use strict";
const nodemailer = require("nodemailer");

const email = {
    main: async (usr_email, subject, html) => {
        if (!usr_email) return false;
        if (!html) return false;
        if (!subject) return false;

        let transporter = nodemailer.createTransport({
            host: "imap.dreamhost.com", // Gmail Host - smtp.gmail.com
            port: 587, // porta - 587
            requireTLS: true,
            secure: false, // this is true as port is 587
            auth: {
                user: "noreply@techlise.com", // generated ethereal user
                pass: "DRr7eCL-", // generated ethereal password
            },
        });

        // enviar email
        let info = await transporter.sendMail({
            from: '"Biocentro" <noreply@techlise.com>', // remetente
            to: usr_email, // receptores
            subject: subject, // assunto
            html: html, // html body
        });

        console.log("Message enviada: %s", info.messageId);
        return true;
    },
};

email.main().catch((error) => {
    console.log(error);
    return false;
});

module.exports = email;
