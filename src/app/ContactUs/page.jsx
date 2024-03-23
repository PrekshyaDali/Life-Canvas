"use client";
import { useState } from "react";
import Layout from "../layouts/Layout";
import Button from "../components/Button"

export default function ContactUs({ data }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    const errors = {};
    if (!formData.firstName.trim()) {
      errors.firstName = "First Name is required";
    }
    if (!formData.lastName.trim()) {
      errors.lastName = "Last Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }


    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

 
    setSubmitted(true);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <Layout>
      <div className="w-full h-full flex justify-center pt-5">
        <div className="flex flex-col space-y-3 h-fit border-gray-100 rounded-md shadow-md border-2 p-5">
          <h1 className="text-3xl font-semibold">Contact Us</h1>
          {submitted ? (
            <p className="text-green-600">Thank you for your message!</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex flex-col space-y-5 sm:flex-row sm:space-y-0 sm:space-x-5 w-full">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`inputfields ${
                    errors.firstName ? "border-red-500" : ""
                  }`}
                />
                {errors.firstName && (
                  <span className="text-red-500">{errors.firstName}</span>
                )}
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`inputfields ${
                    errors.lastName ? "border-red-500" : ""
                  }`}
                />
                {errors.lastName && (
                  <span className="text-red-500">{errors.lastName}</span>
                )}
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`inputfields ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email}</span>
              )}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className={`inputfields ${
                  errors.subject ? "border-red-500" : ""
                }`}
              />
              {errors.subject && (
                <span className="text-red-500">{errors.subject}</span>
              )}
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                cols={20}
                rows={4}
                className={`bg-transparent w-full border-2 border-gray-300 rounded-md p-2 ${
                  errors.message ? "border-red-500" : ""
                }`}
              />
              {errors.message && (
                <span className="text-red-500">{errors.message}</span>
              )}
              <div className="flex justify-between">
                <Button type="submit" name="Submit" />
              </div>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
}
