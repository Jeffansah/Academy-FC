import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { body, validationResult } from "express-validator";

export async function POST(request) {
  console.log("Reached ContactAPI");

  const validateContactForm = [
    body("firstname")
      .trim()
      .isLength({ min: 1 })
      .withMessage("First name is required."),
    body("lastname")
      .trim()
      .isLength({ min: 1 })
      .withMessage("Last name is required."),
    body("email").isEmail().withMessage("Email is not valid."),
    body("message")
      .trim()
      .isLength({ min: 1 })
      .withMessage("Message is required."),
  ];

  //   await Promise.all(
  //     validateContactForm.map((validation) => validation.run(request))
  //   );

  //   const errors = validationResult(request);
  //   if (!errors.isEmpty()) {
  //     console.log(errors.array());
  //     return NextResponse.json({ errors: errors.array() });
  //   }

  const { firstname, lastname, email, message } = request.body;

  const data = {
    firstname: "yo",
    lastname: "yooo",
    email: "jsougly1@gmail.com",
    message: "yoooo",
  };

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: process.env.GMAIL_USER,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      refreshToken: process.env.GMAIL_REFRESH_TOKEN,
    },
  });

  const mailOptions = {
    from: data.email,
    to: process.env.GMAIL_USER,
    replyTo: data.email,
    subject: `New message from ${data.firstname} ${data.lastname}`,
    html: `<p>You have a new message from ${data.firstname} ${data.lastname} ${data.message}.</p>`,
  };

  try {
    ("Sending email...");
    const mail = await transporter.sendMail(mailOptions);

    console.log(`Message sent: ${mail.messageId}`);
    return NextResponse.json({
      message: "Email sent successfully.",
    });
  } catch (error) {
    console.error("Failed to send email", error);
    return NextResponse.json({ message: "Failed to send email." });
  }
}
