import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';

const transporter = {
  auth: {
    // SendGrid API
    api_key: process.env.NEXT_PUBLIC_SENDGRID_API_KEY,
  },
};

const mailer = nodemailer.createTransport(
  sgTransport(transporter)
);

export default async (req, res) => {
  console.log(req.body);
  const { name, email, number, subject, text } = req.body;

  const data = {
    // Sender Email
    to: 'info@mylifeaboard.com',
    from: 'info@mylifeaboard.com',
    subject: 'New Message from MyLifeAboard.com',
    text: text,
    html: `
            <b>From:</b> ${name} <br /> 
            <b>Email:</b> ${email} <br/>
            <b>Number:</b> ${number} <br /> 
            <b>Subject:</b> ${subject} <br /> 
            <b>Text:</b> ${text} 
        `,
  };
  try {
    const response = await mailer.sendMail(data);
    console.log(response);
    res.status(200).send('Email Sent Successfully');
  } catch (error) {
    console.log(error);
    res.status(500).send('Processing Error');
  }
};
