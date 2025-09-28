import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    try {
      // Send email using Resend
      const data = await resend.emails.send({
        from: process.env.FROM_EMAIL || "onboarding@resend.dev", // sender address
        to: [process.env.INFO_EMAIL!], // list of receivers (your email)
        subject: `Contact submission from ${name} (${email})`, // Subject line
        text: message, // plain text body
        replyTo: email, // Allow replies to go back to the sender
      });

      return res.status(200).json({
        status: "success",
        data: {
          message: "Email sent successfully",
          emailId: data.data?.id,
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
