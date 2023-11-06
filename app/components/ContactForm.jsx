"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log("Message sent successfully!"),
        setFormData({ firstname: "", lastname: "", email: "", message: "" });
    }

    if (!response.ok) console.log("Message failed to send.");
  };

  return (
    <div className="mt-20 text-secondary text-sm">
      <h1
        data-aos="fade-up"
        data-aos-delay="400"
        className="font-bold text-5xl font-urbanist text-white"
      >
        Contact us
      </h1>
      <form
        data-aos="fade-up"
        data-aos-delay="500"
        onSubmit={handleSubmit}
        className="mt-7 flex flex-col gap-6"
      >
        <div className="flex gap-10">
          <input
            className="flex-1 bg-sidebar py-4 px-3 focus:outline-none"
            onChange={(e) => setFormData({ firstname: e.target.value })}
            type="text"
            id="firstname"
            placeholder="* First Name"
            required
          />
          <input
            onChange={(e) => setFormData({ lastname: e.target.value })}
            className="flex-1 bg-sidebar py-4 px-3 focus:outline-none"
            type="text"
            id="lastname"
            placeholder="* Last Name"
          />
        </div>
        <div className="flex flex-col gap-6">
          <input
            onChange={(e) => setFormData({ email: e.target.value })}
            className="bg-sidebar py-4 px-3 focus:outline-none"
            type="email"
            id="email"
            minLength={5}
            maxLength={100}
            placeholder="* Email"
            required
          />
          <textarea
            onChange={(e) => setFormData({ message: e.target.value })}
            className="bg-sidebar py-4 px-3 focus:outline-none"
            id="message"
            rows={6}
            placeholder="How can we help you?"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-4 text-center bg-theme text-white"
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
