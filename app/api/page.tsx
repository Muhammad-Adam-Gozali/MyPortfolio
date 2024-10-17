// pages/api/sendEmail.tsx

import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function Page (req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
    
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.MY_APP_EMAIL,
        pass: process.env.MY_APP_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.MY_APP_RECEIVER,
      replyTo: email,
      subject: `Anda mendapatkan pesan dari ${name}`,
      html: `<p>Anda mendapatkan pesan dari : ${name}</p><br>
        <p>Email : ${email}</p><br>
        <p>Pesan : ${message}</p>`,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email: ', error);
    return res.status(500).json({ message: 'Error sending email' });
  }
}
