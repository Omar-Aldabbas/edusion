import { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="min-w-8xl py-6 px-6 md:px-12 rounded-md">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 flex flex-col">
          <label className="mb-2 font-semibold text-foreground">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-200/50 px-3 py-4 focus:outline-none"
            required
          />
        </div>

        <div className="flex-1 flex flex-col">
          <label className="mb-2 font-semibold text-foreground">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-200/50 px-3 py-4 focus:outline-none"
            required
          />
        </div>
      </div>

      <div className="flex flex-col mt-4">
        <label className="mb-2 font-semibold text-foreground">
          Your Subject
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="bg-gray-200/50 px-3 py-4 focus:outline-none"
          required
        />
      </div>

      <div className="flex flex-col mt-4">
        <label className="mb-2 font-semibold text-foreground">
          Your Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="bg-gray-200/50 px-3 py-4 focus:outline-none"
          required
        />
      </div>

      <div className="mt-6 text-center w-full">
        <button
          type="submit"
          className="relative inline-block px-6 py-2 rounded-full bg-primary font-semibold group"
        >
          <span
            className="absolute top-0 left-0 w-full h-full bg-foreground 
                 scale-y-0 origin-top transition-transform duration-300 
                 ease-out group-hover:scale-y-100 group-active:scale-y-100 z-0 rounded-full"
          ></span>
          <span className="relative z-10 text-background">Send Message</span>
        </button>
      </div>
    </form>
  );
};
