import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  data?: unknown;
  message?: string;
  status: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USERNAME, // SMTP username
        pass: process.env.SMTP_PASSWORD, // SMTP password
      },
    } as nodemailer.TransportOptions);

    try {
      // Send mail with defined transport object
      await transporter.sendMail({
        from: process.env.SMTP_USERNAME, // sender address
        to: process.env.INFO_EMAIL, // list of receivers (your email)
        subject: `Contact submission from ${name} ${email}`, // Subject line
        text: message, // plain text body
      });

      return res.status(200).json({
        status: "success",
        data: {
          message: "Email sent successfully",
        },
      });
    } catch (error) {
      console.error("Error sending email:", error);
      return res
        .status(500)
        .json({ status: "fail", message: "Error sending email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
