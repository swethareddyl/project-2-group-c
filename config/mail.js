const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'vault76marketplace@gmail.com',
      pass: 'appumrpfdtgrlgey'
    },
  });
  
  // xckseopouahnqeht