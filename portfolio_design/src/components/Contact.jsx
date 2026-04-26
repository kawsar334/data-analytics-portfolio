

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
import LinkBar from "./LinkBar";
import Tittle from "./Tittle";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_tb6tpdm", 
        "template_nslj8rl", 
        formData,
        "Zf8Rumadp2r9ihUqZ" 
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccess(true);
          if(response){
            toast.success("Message sent successfully!")
          }
          setError(false);
          setFormData({ name: "", email: "", message: "" }); 
        },
        (error) => {
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 3000);
          toast.error("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="py-16  px-4 w-[95%] md:w-[87%] m-auto" id="contact">
      <div className="max-w-7xl mx-auto">
        <Tittle text="Contact Me"/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start ">
          <div data-aos="fade-up"> 
            <h3 className="text-2xl font-semibold mb-4 first-letter:text-blue first-letter:text-3xl">Get in Touch</h3>
            <p className="mb-4">
              Feel free to reach out to me via email, phone, or WhatsApp. You
              can also connect with me on social media.
            </p>

            <ul className="space-y-4">
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:kawsarfiroz11@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  kawsarfiroz11@gmail.com
                </a>
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+8801854777882"
                  className="text-blue-600 hover:underline"
                >
                  01854777882
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/+8801854777882"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex justify-start gap-3 items-center"
                  >
                  <strong>Chat on WhatsApp:</strong>
                   <i class="fab fa-whatsapp text-2xl text-green-500 hover:text-green-600"></i>
                </a>
               
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-xl font-semibold mb-2">Follow Me</h4>
           
              <div className="flex space-x-4 justify-start items-center ">
              <LinkBar/>
              </div>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg "
            data-aos="fade-up" 
          >
            <h3 className="text-2xl font-semibold text-[gray] mb-6">
              Send a Message
            </h3>
            {success && (
              <p className="text-green-600 mb-4">Message sent successfully!</p>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 text-[gray] border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md text-[gray] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border text-[gray] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 bg-blue px-6 py-3 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
              {error && (
                <h2 className="text-red-500 my-4 capitalize text-center mb-8">
                  Something went wrong. Please try again.
                </h2>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
