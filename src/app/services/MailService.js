const nodemailer = require("nodemailer");
const mailConfig = require("../../config/mail");

class MailService {
  async send(message) {
    const trasporter = nodemailer.createTransport(mailConfig);

    return trasporter.sendMail(message);
  }
}

module.exports = new MailService();
