import { FacebookIcon, TwitterIcon, YoutubeIcon } from "lucide-react";

export const EmailTemplate = ({
  message,
  firstname,
  lastname,
  email,
  subject,
}) => {
  const year = new Date().getFullYear();

  const mediaQueries = `
@media only screen and (max-width: 620px) {
  .body h1 {
    font-size: 28px !important;
    margin-bottom: 10px !important;
  }

  .body p,
  .body ul,
  .body ol,
  .body td,
  .body span,
  .body a {
    font-size: 16px !important;
  }

  .wrapper,
  .article {
    padding: 10px !important;
  }

  .content {
    padding: 0 !important;
  }

  .container {
    padding: 0 !important;
    width: 100% !important;
  }

  .main {
    border-left-width: 0 !important;
    border-radius: 0 !important;
    border-right-width: 0 !important;
  }

  .btn table {
    width: 100% !important;
  }

  .btn a {
    width: 100% !important;
  }

  .img-responsive {
    height: auto !important;
    max-width: 100% !important;
    width: auto !important;
  }
}
@media all {
  .ExternalClass {
    width: 100%;
  }

  .ExternalClass,
  .ExternalClass p,
  .ExternalClass span,
  .ExternalClass font,
  .ExternalClass td,
  .ExternalClass div {
    line-height: 100%;
  }

  .apple-link a {
    color: inherit !important;
    font-family: inherit !important;
    font-size: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
    text-decoration: none !important;
  }

  #MessageViewBody a {
    color: inherit;
    text-decoration: none;
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    line-height: inherit;
  }

  .btn-primary table td:hover {
    background-color: #34495e !important;
  }

  .btn-primary a:hover {
    background-color: #34495e !important;
    border-color: #34495e !important;
  }
}`;

  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: mediaQueries }} />
      <table
        role="presentation"
        border="0"
        cellPadding="0"
        cellSpacing="0"
        className="body"
        style={{
          borderCollapse: "separate",
          msoTableLspace: "0pt",
          msoTableRspace: "0pt",
          backgroundColor: "#f6f6f6",
          width: "100%",
        }}
        width="100%"
        bgcolor="#f6f6f6"
      >
        <tr>
          <td
            style={{
              fontFamily: "sans-serif",
              fontSize: "14px",
              verticalAlign: "top",
            }}
            valign="top"
          >
            &nbsp;
          </td>
          <td
            className="container"
            style={{
              fontFamily: "sans-serif",
              fontSize: "14px",
              verticalAlign: "top",
              display: "block",
              maxWidth: "580px",
              padding: "10px",
              width: "580px",
              margin: "0 auto",
            }}
            width="580"
            valign="top"
          >
            <div
              className="content"
              style={{
                boxSizing: "border-box",
                display: "block",
                margin: "0 auto",
                maxWidth: "580px",
                padding: "10px",
              }}
            >
              <table
                role="presentation"
                className="main"
                style={{
                  borderCollapse: "separate",
                  msoTableLspace: "0pt",
                  msoTableRspace: "0pt",
                  background: "#ffffff",
                  borderRadius: "3px",
                  width: "100%",
                  padding: 0,
                  marginTop: "20px",
                }}
                width="100%"
              >
                <img
                  width={119}
                  height={119}
                  src="https://i.ibb.co/Mh69jcS/SianoFC.png"
                  alt="Siano FC Logo"
                  style={{ margin: 0, padding: 0 }}
                />
                <tr>
                  <td
                    className="wrapper"
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "14px",
                      verticalAlign: "top",
                      boxSizing: "border-box",
                      padding: "0 20px 20px 20px",
                    }}
                    valign="top"
                  >
                    <table
                      role="presentation"
                      border="0"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{
                        borderCollapse: "separate",
                        msoTableLspace: "0pt",
                        msoTableRspace: "0pt",
                        width: "100%",
                      }}
                      width="100%"
                    >
                      <tr>
                        <td
                          style={{
                            fontFamily: "sans-serif",
                            fontSize: "14px",
                            verticalAlign: "top",
                          }}
                          valign="top"
                        >
                          <p
                            style={{
                              fontFamily: "sans-serif",
                              fontSize: "14px",
                              fontWeight: "bold",
                              margin: 0,
                              marginBottom: "15px",
                            }}
                          >
                            Message from {firstname} {lastname},
                          </p>
                          <p
                            style={{
                              fontFamily: "sans-serif",
                              fontSize: "14px",
                              fontWeight: "normal",
                              margin: 0,
                              marginBottom: "15px",
                            }}
                          >
                            {message}
                          </p>
                          <table
                            role="presentation"
                            border="0"
                            cellPadding="0"
                            cellSpacing="0"
                            className="btn btn-primary"
                            style={{
                              borderCollapse: "separate",
                              msoTableLspace: "0pt",
                              msoTableRspace: "0pt",
                              boxSizing: "border-box",
                              width: "100%",
                            }}
                            width="100%"
                          >
                            <tbody>
                              <tr>
                                <td
                                  align="left"
                                  style={{
                                    fontFamily: "sans-serif",
                                    fontSize: "14px",
                                    verticalAlign: "top",
                                    padding: 0,
                                  }}
                                  valign="top"
                                >
                                  <table
                                    role="presentation"
                                    border="0"
                                    cellPadding="0"
                                    cellSpacing="0"
                                    style={{
                                      borderCollapse: "separate",
                                      msoTableLspace: "0pt",
                                      msoTableRspace: "0pt",
                                      width: "auto",
                                    }}
                                  >
                                    <tbody style={{ padding: 0 }}>
                                      <tr style={{ padding: 0 }}>
                                        <td
                                          style={{
                                            fontFamily: "sans-serif",
                                            fontSize: "14px",
                                            verticalAlign: "top",
                                            borderRadius: "5px",
                                            textAlign: "center",
                                            padding: 0,
                                            backgroundColor: "#3498db",
                                          }}
                                          valign="top"
                                          align="center"
                                          bgcolor="#3498db"
                                        >
                                          <a
                                            href={`mailto:${email}?subject=Re : ${
                                              subject ||
                                              "Follow up to your enquiry"
                                            }`}
                                            target="_blank"
                                            style={{
                                              border: "solid 1px #c72b2b",
                                              borderRadius: "5px",
                                              boxSizing: "border-box",
                                              cursor: "pointer",
                                              display: "inline-block",
                                              fontSize: "14px",
                                              fontWeight: "bold",
                                              margin: 0,
                                              padding: "12px 25px",
                                              textDecoration: "none",
                                              textTransform: "capitalize",
                                              backgroundColor: "#c72b2b",
                                              color: "#ffffff",
                                            }}
                                          >
                                            Reply to this email
                                          </a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <div
                className="footer"
                style={{
                  clear: "both",
                  marginTop: "10px",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                <table
                  role="presentation"
                  border="0"
                  cellPadding="0"
                  cellSpacing="0"
                  style={{
                    borderCollapse: "separate",
                    msoTableLspace: "0pt",
                    msoTableRspace: "0pt",
                    width: "100%",
                  }}
                  width="100%"
                >
                  <tr>
                    <td
                      className="content-block"
                      style={{
                        fontFamily: "sans-serif",
                        verticalAlign: "top",
                        padding: "10px",
                        color: "#999999",
                        fontSize: "12px",
                        textAlign: "center",
                      }}
                      valign="top"
                      align="center"
                    >
                      <span
                        className="apple-link"
                        style={{
                          color: "#999999",
                          fontSize: "12px",
                          textAlign: "center",
                        }}
                      >
                        &copy; Siano FC, All Rights Reserved.
                      </span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </td>
          <td
            style={{
              fontFamily: "sans-serif",
              fontSize: "14px",
              verticalAlign: "top",
            }}
            valign="top"
          >
            &nbsp;
          </td>
        </tr>
      </table>
    </div>
  );
};
