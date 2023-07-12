const nodemailer = require('nodemailer')

async function sendEmail(email, body) {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'cooljpro2211@gmail.com',
            pass: 'ptgnulyaifpicxmq'
        }
    });

    let message = {
        from: 'cooljpro2211@gmail.com',
        to: 'jcool2939@gmail.com',
        subject: 'New message from your application',
        text: `Email: ${email}\n\n${body}`
    };

    let info = await transporter.sendMail(message)
    console.log('Message sent: %s', info.messageId)
}

module.exports = {
    sendEmail
}