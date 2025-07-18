import { useRef, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
 

export const Contact = () => {
  const form = useRef();
  const Service_ID = "service_y61lla4";
  const Template_ID = "template_jtuyr8a";
  const public_key = "MLBXCLSnsA4Toenlw";
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

   
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(Service_ID, Template_ID, form.current, public_key)
      .then((result) => {
          
        alert("Message sent successfully!");
        form.current.reset(); // Reset the form after successful submission
        console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <RevealOnScroll>
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">
          Contact Me
        </h2>
        <p className="text-gray-300 mb-6">
          Feel free to reach out for collaborations, questions, or just to say hi!
        </p>
        <form ref={form} onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="user_name" placeholder="Your Name" className="w-full p-3 bg-gray-800 text-white rounded-md" required />
          <input type="email" name="user_email" placeholder="Your Email - example@example.com" className="w-full p-3 bg-gray-800 text-white rounded-md" required />
          <textarea name="message" placeholder="Your Message" rows={6} className="w-full p-3 bg-gray-800 text-white rounded-md h-32" required></textarea>
          <button type="submit" className="w-full p-3 bg-blue-500 hover:bg-blue-600 hover:shadow-(0_0_15px_rgba(59,130,24)) transition-colors rounded-md text-white font-semibold">
            Send Message
          </button>
        </form>
      </div>
    </section>
    </RevealOnScroll>
  );
};
