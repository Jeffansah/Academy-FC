import React from "react";

const ContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.firstname.value,
      lastname: e.target.lastname.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
  };

  return (
    <div className="mt-20 text-secondary text-sm">
      <h1 className="font-bold text-5xl font-urbanist text-white">
        Contact us
      </h1>
      <form className="mt-7 flex flex-col gap-8">
        <div className="flex gap-10">
          <input
            className="flex-1 bg-sidebar py-4 px-3 focus:outline-none"
            type="text"
            id="firstname"
            placeholder="* First Name"
            required
          />
          <input
            className="flex-1 bg-sidebar py-4 px-3 focus:outline-none"
            type="text"
            id="lastname"
            placeholder="* Last Name"
          />
        </div>
        <div className="flex flex-col gap-8">
          <input
            className="bg-sidebar py-4 px-3 focus:outline-none"
            type="email"
            id="email"
            minLength={5}
            maxLength={100}
            placeholder="* Email"
            required
          />
          <textarea
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
