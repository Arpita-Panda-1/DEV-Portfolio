const nodemailer = require("nodemailer");

const Contact = require("../models/contactModel");

const sendContact = async (req, res) => {
    try {
        const { name, email, phone, company, reason, message } = req.body;

        await Contact.create({
            name,
            email,
            phone,
            company,
            reason,
            message,
        });

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const info = await transporter.sendMail({
            from: '"Portfolio" <portfolio@test.com>',
            to: process.env.EMAIL,
            subject: "Portfolio Contact",
            html: `
                <h2>New Portfolio Contact</h2>

                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Company:</strong> ${company}</p>
                <p><strong>Reason:</strong> ${reason}</p>

                <hr/>

                <p>${message}</p>
            `,
        });

        console.log(
            "Preview URL:",
            nodemailer.getTestMessageUrl(info)
        );

        return res.status(200).json({
            success: true,
            message: "Email Sent",
        });
    } catch (error) {
        console.log("CONTACT ERROR");

        console.log(error);

        return res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

module.exports = {
    sendContact,
};