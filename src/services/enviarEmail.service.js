import nodeMailer from 'nodemailer';


const transporter = nodeMailer.createTransport({
    service: process.env.MAIL_SERVICE,
    auth: {
        user: process.env.USER_MAIL_SENDER,
        pass: process.env.PASS_MAIL_SENDER
    }
});

export default async (options) => {
    try {
        const sent = await transporter.sendMail({
            from: `${process.env.MAIL_APP_NAME} <${process.env.USER_MAIL_SENDER}>`,
            to: options.email,
            subject: options.subject,
            text: options.content,
            html: options.html
        });

        return (sent.rejected && sent.rejected.length);

    } catch (err) {
        console.log(err);
        return false;
    }

}
