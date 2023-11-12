import {
  Body,
  Container,
  Column,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import Logo from "../assets/images/SianoFC.png";
import { Tailwind } from "@react-email/tailwind";
import { FacebookIcon, TwitterIcon, Youtube } from "lucide-react";
import Image from "next/image";

const EmailResponse = ({ message, firstname, lastname, email, subject }) => {
  const year = new Date().getFullYear();

  return (
    <Html>
      <Head />
      <Preview>New Enquiry from Siano FC!</Preview>
      <Tailwind>
        <Body className="bg-gray-100">
          <Container className="border-2">
            <Section className="bg-white my-10 py-4 pt-2 rounded-lg shadow-md w-full border-4">
              <div className="w-full border-2">
                <img
                  width={119}
                  height={119}
                  src="https://i.ibb.co/Mh69jcS/SianoFC.png"
                  alt="Siano FC Logo"
                  className="object-contain"
                />
              </div>
              <div className="h-1 bg-gray-100 w-full mb-5"></div>
              <Section className="px-6">
                <Text className="leading-tight text-lg text-gray-800 font-bold mb-2">
                  Enquiry from {firstname} {lastname},
                </Text>
                <Text className="text-gray-600 mb-4">{message}</Text>
                <Text className="text-gray-600">
                  Kindly respond to this email at:
                  <br />
                  <Link
                    href={`mailto:${email}?subject=Re : ${
                      subject || "Follow up to your enquiry"
                    }`}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    {email}
                  </Link>
                </Text>
                <Text className="text-gray-600 mt-4">
                  Signed,
                  <br />
                  Siano FC Support Team
                </Text>
              </Section>

              <Section className="pt-4">
                <Row>
                  <Column
                    align="right"
                    style={{ width: "50%", paddingRight: "8px" }}
                  >
                    <TwitterIcon className="w-6 h-6" />
                  </Column>
                  <Column
                    align="left"
                    style={{ width: "50%", paddingLeft: "8px" }}
                  >
                    <Youtube className="w-6 h-6" />
                  </Column>
                  <Column
                    align="left"
                    style={{ width: "50%", paddingLeft: "8px" }}
                  >
                    <FacebookIcon className="w-6 h-6" />
                  </Column>
                </Row>
                <Text
                  className="text-xs"
                  style={{ textAlign: "center", color: "#706a7b" }}
                >
                  © {year} Siano FC, All Rights Reserved <br />
                </Text>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailResponse;
