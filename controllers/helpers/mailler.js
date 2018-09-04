const nodemailer = require('nodemailer');
const smtpTransport = require("nodemailer-smtp-transport");
const credentials = require("../../credentials.json");


var transporter = nodemailer.createTransport(smtpTransport(
    {
        service: 'gmail',
        auth: {
          user: credentials.email.username,
          pass: credentials.email.password
        }
    }
));



// function that sends user cres]dentials to the  users via the email
sendUserCredentials=function(username,password){

    var mailOptions = {
        from: 'youremail@gmail.com',
        to: 'sathiraumeshhhhhh@gmail.com',
        subject: 'Sending Email using Node.js',
        text: `username ${username} password ${password}`
      };



transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

}


module.exports.sendUsercredentials=sendUserCredentials;