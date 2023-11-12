import nodemailer from "nodemailer";
import { body, validationResult } from "express-validator";
import mjml from "mjml";

// export const validateContactForm = [
//   body("firstname")
//     .trim()
//     .isLength({ min: 1 })
//     .withMessage("First name is required."),
//   body("lastname")
//     .trim()
//     .isLength({ min: 1 })
//     .withMessage("Last name is required."),
//   body("email").isEmail().withMessage("Email is not valid."),
//   body("message")
//     .trim()
//     .isLength({ min: 1 })
//     .withMessage("Message is required."),
// ];

export async function GET() {
  console.log("Reached ContactAPI");

  return Response.json({ message: "Email sent successfully." });

  //   await Promise.all(
  //     validateContactForm.map((validation) => validation.run(req))
  //   );

  //   const errors = validationResult(req);
  //   if (!errors.isEmpty()) {
  //     return res.status(400).json({ errors: errors.array() });
  //   }

  //   const { firstname, lastname, email, message } = req.body;

  //   const data = {
  //     firstname,
  //     lastname,
  //     email,
  //     message,
  //   };

  //   const transporter = nodemailer.createTransport({
  //     host: "smtp.gmail.com",
  //     port: 465,
  //     secure: true,
  //     auth: {
  //       type: "OAuth2",
  //       user: GMAIL_USER,
  //       clientId: process.env.GOOGLE_CLIENT_ID,
  //       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  //       refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  //     },
  //   });

  //   const mjmlTemplate = `
  //   <mjml>
  //     <mj-head>
  //       <mj-style>
  //         .title {
  //           color: #333333;
  //           font-size: 24px;
  //           font-weight: bold;
  //         }
  //         .content {
  //           color: #555555;
  //           font-size: 16px;
  //         }
  //         .footer {
  //           color: #999999;
  //           font-size: 14px;
  //         }
  //       </mj-style>
  //     </mj-head>
  //     <mj-body>
  //       <mj-section background-color="#f0f0f0">
  //         <mj-column>
  //           <mj-text css-class="title">New Message</mj-text>
  //           <mj-text css-class="content">From: ${firstname} ${lastname}</mj-text>
  //           <mj-text css-class="content">Email: ${email}</mj-text>
  //           <mj-text css-class="content">${message}</mj-text>
  //         </mj-column>
  //       </mj-section>
  //       <mj-section>
  //         <mj-column>
  //           <mj-text css-class="footer">Footer Information</mj-text>
  //         </mj-column>
  //       </mj-section>
  //     </mj-body>
  //   </mjml>
  // `;

  //   const htmlOutput = mjml(mjmlTemplate, { minify: true }).html;

  //   const mailOptions = {
  //     from: data.email,
  //     to: process.env.GMAIL_USER,
  //     replyTo: data.email,
  //     subject: `New message from ${data.firstname} ${data.lastname}`,
  //     html: htmlOutput,
  //   };

  //   try {
  //     const mail = await transporter.sendMail(mailOptions);

  //     console.log(`Message sent: ${mail.messageId}`);
  //     return res.status(200).json({ message: "Email sent successfully." });
  //   } catch (error) {
  //     console.error("Failed to send email", error);
  //     return res.status(500).json({ message: "Failed to send email." });
  //   }
}
