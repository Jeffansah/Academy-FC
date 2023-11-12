"use server";

import { Resend } from "resend";
import React from "react";
import EmailResponse from "@/app/components/EmailResponse";

const resend = new Resend(process.env.RESEND_APIKEY);

export const sendEmail = async (formData) => {
  console.log("Reached sendEmail");

  const firstname = formData.get("firstname");
  const lastname = formData.get("lastname");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  if (!message || typeof message !== "string")
    return {
      error: "Message is Invalid.",
    };

  if (!email || typeof email !== "string") {
    return {
      error: "Email is Invalid.",
    };
  }

  if (!firstname || typeof firstname !== "string") {
    return {
      error: "First name is Invalid.",
    };
  }

  if (!lastname || typeof lastname !== "string") {
    return {
      error: "Last name is Invalid.",
    };
  }

  if (!subject || typeof subject !== "string") {
    return {
      error: "Subject is Invalid.",
    };
  }

  try {
    await resend.emails.send({
      from: "Siano Football Academy <onboarding@resend.dev>",
      to: "jeffansah13@gmail.com",
      reply_to: email,
      subject: `New enquiry from ${firstname} ${lastname} : ${subject}`,
      react: React.createElement(EmailResponse, {
        message,
        firstname,
        lastname,
        email,
        subject,
      }),
    });
  } catch (error) {
    console.log(error);
  }
};
