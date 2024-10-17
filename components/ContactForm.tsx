"use client";
import { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Email sent successfully');
      } else {
        alert('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email', error);
      alert('Error sending email');
    }
  };

 


  return (
    <form onSubmit={sendEmail}>
      <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white to-red md:block font-bold mb-3">Hire Me</h2>
      <div className="mb-3">
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          name="name"
          className="w-full px-3 py-2 text-sm bg-white border-0 rounded shadow"
          required
        />
      </div>
      <div className="mb-3">
        <input
          id="email"
          type="text"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          name="email"
          className="w-full px-3 py-2 text-sm shadow-mb placeholder-gray-400 bg-white border-0 rounded shadow"
          required
        />
      </div>
      <div className="mb-3">
        <textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message"
          name="message"
          className="w-full min-h-12 max-h-20 px-3 py-2 text-sm placeholder-gray-400 bg-white border-0 rounded shadow"
          required
        />
      </div>
      <div className="md:text-start text-center">
        <button className="px-6 py-3 text-sm m-0 font-bold shadow-lg text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400 inline-block mx-auto">
          Send a message
        </button>
     </div>

    </form>
  );
};

export default ContactForm;
