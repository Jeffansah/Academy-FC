"use client";

import { sendEmail } from "@/lib/sendEmail";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formFields, setFormFields] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData(event.target);
      await sendEmail(formData);
      toast({
        title: "Thanks for your message!",
        description:
          "Our team will respond to your enquiry as soon as possible.",
        className: "bg-slate-700 border-0 text-white",
        duration: 6000,
      });
    } catch (error) {
      toast({
        title: "Oops...",
        description: "Your message failed to send. Please try again.",
        variant: "destructive",
        className: "border-0 text-white",
      });
    } finally {
      setIsLoading(false);
      setFormFields({
        firstname: "",
        lastname: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div className="max-lg:mt-10 mt-20 text-white text-sm">
      <h1
        data-aos="fade-up"
        data-aos-delay="400"
        className="font-bold text-5xl max-xl:text-3xl font-urbanist text-white"
      >
        Contact us
      </h1>
      <form
        data-aos="fade-up"
        data-aos-delay="500"
        onSubmit={handleSubmit}
        className="mt-7 flex flex-col gap-6 max-xl:text-base"
      >
        <div className="flex gap-8 max-sm:gap-4">
          <input
            className="max-sm:w-1/2 flex-1 bg-sidebar py-4 px-3 focus:outline-none placeholder:text-secondary"
            type="text"
            onChange={(event) =>
              setFormFields({ ...formFields, firstname: event.target.value })
            }
            name="firstname"
            id="firstname"
            value={formFields.firstname}
            placeholder="* First Name"
            required
          />
          <input
            className="max-sm:w-1/2 flex-1 bg-sidebar py-4 px-3 focus:outline-none placeholder:text-secondary"
            type="text"
            name="lastname"
            onChange={(event) =>
              setFormFields({ ...formFields, lastname: event.target.value })
            }
            value={formFields.lastname}
            id="lastname"
            placeholder="* Last Name"
            required
          />
        </div>
        <div className="flex flex-col gap-6">
          <input
            className="bg-sidebar py-4 px-3 focus:outline-none placeholder:text-secondary"
            type="email"
            id="email"
            value={formFields.email}
            onChange={(event) =>
              setFormFields({ ...formFields, email: event.target.value })
            }
            name="email"
            minLength={5}
            maxLength={100}
            placeholder="* Email"
            required
          />
          <input
            className="bg-sidebar py-4 px-3 focus:outline-none placeholder:text-secondary"
            type="text"
            id="subject"
            value={formFields.subject}
            onChange={(event) =>
              setFormFields({ ...formFields, subject: event.target.value })
            }
            name="subject"
            maxLength={100}
            placeholder="* Subject"
          />
          <textarea
            className="bg-sidebar py-4 px-3 focus:outline-none placeholder:text-secondary"
            id="message"
            onChange={(event) =>
              setFormFields({ ...formFields, message: event.target.value })
            }
            rows={6}
            name="message"
            value={formFields.message}
            placeholder="How can we help you?"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-4 text-center bg-theme text-white"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
