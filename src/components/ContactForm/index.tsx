"use client";

import { useState, FormEvent, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Notification from "./Notification";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const form = useRef<HTMLFormElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const isFormValid = Object.values(formData).every(
    (value) => value.trim() !== ""
  );

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [formData.message]);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);
    try {
      if (form.current) {
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current,
          { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
        );
        setNotification({
          message: "Message sent successfully!",
          type: "success",
        });
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          message: "",
        });
      }
    } catch (error: any) {
      setNotification({
        message: `Failed to send message: ${error.text || error}`,
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {notification && (
        <Notification message={notification.message} type={notification.type} />
      )}

      <form ref={form} onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              className="w-full h-[41px] px-4 rounded-md bg-[#F3F4F6] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mulish text-primary text-sm leading-5 font-normal"
              required
            />
            <div className="flex items-center justify-between">
              <p className="ml-3 font-mulish text-primary text-sm leading-5 font-normal">
                First Name <span className="text-red-500 text-lg">*</span>
              </p>
            </div>
          </div>

          <div className="space-y-1">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              className="w-full h-[41px] px-4 rounded-md bg-[#F3F4F6] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mulish text-primary text-sm leading-5 font-normal"
              required
            />
            <div className="flex items-center justify-between">
              <p className="ml-3 font-mulish text-primary text-sm leading-5 font-normal">
                Last Name <span className="text-red-500 text-lg">*</span>
              </p>
            </div>
          </div>

          <div className="space-y-1">
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
              className="w-full h-[41px] px-4 rounded-md bg-[#F3F4F6] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mulish text-primary text-sm leading-5 font-normal"
              required
            />
            <div className="flex items-center justify-between">
              <p className="ml-3 font-mulish text-primary text-sm leading-5 font-normal">
                Phone Number <span className="text-red-500 text-lg">*</span>
              </p>
            </div>
          </div>

          <div className="space-y-1">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full h-[41px] px-4 rounded-md bg-[#F3F4F6] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mulish text-primary text-sm leading-5 font-normal"
              required
            />
            <div className="flex items-center justify-between">
              <p className="ml-3 font-mulish text-primary text-sm leading-5 font-normal">
                Business E-Mail Address{" "}
                <span className="text-red-500 text-lg">*</span>
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <textarea
            ref={textareaRef}
            name="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder="Tell us about your project and how we can spanport. A bit of context will allow us to connect you to the right team faster."
            className="w-full min-h-[250px] px-4 py-6 rounded-md bg-[#F3F4F6] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mulish text-primary text-sm leading-5 font-normal placeholder-[#BFCBD2]"
            required
          />
          <div className="flex items-center justify-between">
            <p className="ml-3 font-mulish text-primary text-sm leading-5 font-normal">
              Message <span className="text-red-500 text-lg">*</span>
            </p>
          </div>
        </div>

        <div className="flex justify-center md:justify-start">
          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className={`w-[169px] h-[38px] font-mulish text-sm font-bold text-white rounded-md transition-colors duration-200 ${
              !isFormValid || isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#1A85C7] hover:bg-[#1A85C7]/90"
            }`}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
