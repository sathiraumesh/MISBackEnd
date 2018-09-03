
const nodemailer = require('nodemailer');
const smtpTransport = require("nodemailer-smtp-transport");

var transporter = nodemailer.createTransport(smtpTransport(
    {
        service: 'gmail',
        auth: {
          user: '',
          pass: ''
        }
    }
));



var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'lrmamweerasinghe@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});