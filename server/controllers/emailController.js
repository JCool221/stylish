const nodemailer = require('nodemailer')


async function sendEmail(email, body) {
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: process.env.SMTP_SECURE,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
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