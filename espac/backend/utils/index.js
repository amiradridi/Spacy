const sgMail = require('@sendgrid/mail');
const nodemailer = require("nodemailer");


sgMail.setApiKey(process.env.SENDGRID_API_KEY);


function sendEmail(mailOptions) {
    return new Promise((resolve, reject) => {
        sgMail.send(mailOptions, (error, result) => {
            if (error) return reject(error);
            return resolve(result);
        });
    });
}






module.exports = {sendEmail } ;
