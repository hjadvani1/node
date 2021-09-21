var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jadvanihiren12@gmail.com',
    pass: 'gmail@4700'
  }
});

var mailOptions = {
  from: 'jadvanihiren12@gmail.com',
  to: 'hirenjjadvanii@gmail.com,yasheshbhavsar61@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!',
  html: '<h1>Working?</h1><p>Yeah workin...............!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});