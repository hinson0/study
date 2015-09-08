var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transporvar transporter = nodemailer.createTransport('SMTpp', {
var transporter = nodemailer.createTransport({
    service: '126',
    auth: {
        user: 'hinson0@126.com',
        pass: 'dddd'
    }
});

// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'hinson0@126.com', // sender address
    to: 'hinson0@qq.com', // list of receivers
    subject: 'Hello ', // Subject line
    text: 'Hello world ', // plaintext body
    html: '<b>Hello world </b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);

});
