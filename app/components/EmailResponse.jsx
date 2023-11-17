import React from "react";
import { FacebookIcon, TwitterIcon, YoutubeIcon } from "lucide-react";

export const EmailTemplate = ({
  message,
  firstname,
  lastname,
  email,
  subject,
}) => {
  const year = new Date().getFullYear();

  const responsiveStyle = `
    @media only screen and (max-width: 700px) {
      .responsive-container {
       width: 200px;
        padding: 20px !important;
      }
      .responsive-container-shell{
        background: green;
        display: block;
      }
    }
  `;

  return (
    <>
      <style>{responsiveStyle}</style>
      <table
        width="100%"
        style={{
          borderCollapse: "collapse",
          background: "#f6f6f6",
        }}
      >
        <tbody>
          <tr>
            <td style={{ textAlign: "center", paddingTop: "20px" }}>
              <img
                width={80}
                src="https://i.ibb.co/qYbqnvj/newlogo.png"
                alt="Siano FC Logo"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div
        className="responsive-container-shell"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f6f6f6",
          padding: "20px 10px",
          paddingBottom: 0,
          margin: "0",
        }}
      >
        <div
          className="responsive-container"
          style={{
            borderRadius: "4px",
            padding: "20px",
            backgroundColor: "#fff",
            width: "500px",
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            New Enquiry Received
          </h1>

          <p style={{ margin: 0, marginTop: "20px", fontSize: "14px" }}>
            <strong>Sender's Information:</strong>
          </p>
          <p style={{ margin: 0, marginTop: "10px", fontSize: "14px" }}>
            <strong>Name: </strong> {firstname} {lastname}
          </p>
          <p style={{ margin: 0, fontSize: "14px" }}>
            <strong>Email: </strong> {email}
          </p>
          <p style={{ margin: 0, fontSize: "14px" }}>
            <strong>Subject: </strong> {subject || "General Enquiry"}
          </p>

          <p
            style={{
              margin: 0,
              marginTop: "20px",
              fontSize: "14px",
              lineHeight: "1.625",
            }}
          >
            <strong>Message:</strong>
          </p>
          <p
            style={{
              margin: 0,
              marginTop: "10px",
              fontSize: "14px",
              marginBottom: "20px",
            }}
          >
            {message}
          </p>

          <a
            href={`mailto:${email}?subject=Re: ${
              subject || "Follow up to your enquiry"
            }`}
          >
            <button
              style={{
                marginTop: "40px",
                fontSize: "16px",
                width: "100%",
                background: "#c72b2b",
                color: "#fff",
                padding: "12px",
                textAlign: "center",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Reply to email
            </button>
          </a>
        </div>
      </div>

      <p
        style={{
          paddingTop: "40px",
          margin: 0,
          paddingBottom: "40px",
          fontSize: "0.75rem",
          textAlign: "center",
          color: "#706a7b",
          backgroundColor: "#f6f6f6",
        }}
      >
        &copy; {year} Siano FC, All Rights Reserved
      </p>
    </>
  );
};

export default EmailTemplate;
