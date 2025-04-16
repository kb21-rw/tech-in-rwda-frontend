'use client'

import { useState, FormEvent, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: ''
  })

  const form = useRef<HTMLFormElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [formData.message])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current,
          {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
          }
        )
        .then(
          () => alert('Message sent successfully!'),
          (error) => alert(`Failed to send message: ${error.text}`)
        )
    }
  }

  return (
    <form ref={form} onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div className="space-y-1">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            className="w-full h-[41px] px-4 rounded-md bg-[#F3F4F6] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mulish text-primary text-sm leading-5 font-normal"
            required
          />
          <p className="font-mulish text-primary text-sm leading-5 font-normal">First Name</p>
        </div>

        {/* Phone Number */}
        <div className="space-y-1">
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            className="w-full h-[41px] px-4 rounded-md bg-[#F3F4F6] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mulish text-primary text-sm leading-5 font-normal"
            required
          />
          <p className="font-mulish text-primary text-sm leading-5 font-normal">Phone Number</p>
        </div>

        {/* Last Name */}
        <div className="space-y-1">
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            className="w-full h-[41px] px-4 rounded-md bg-[#F3F4F6] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mulish text-primary text-sm leading-5 font-normal"
            required
          />
          <p className="font-mulish text-primary text-sm leading-5 font-normal">Last Name</p>
        </div>

        {/* Email */}
        <div className="space-y-1">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full h-[41px] px-4 rounded-md bg-[#F3F4F6] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mulish text-primary text-sm leading-5 font-normal"
            required
          />
          <p className="font-mulish text-primary text-sm leading-5 font-normal">Business E-Mail Address</p>
        </div>
      </div>

      {/* Message */}
      <div>
        <textarea
          ref={textareaRef}
          name="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us about your project and how we can support. A bit of context will allow us to connect you to the right team faster."
          className="w-full min-h-[250px] px-4 py-6 rounded-md bg-[#F3F4F6] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mulish text-primary text-sm leading-5 font-normal placeholder-[#BFCBD2]"
          required
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-[169px] h-[38px] font-mulish text-sm font-bold text-white bg-[#1A85C7] rounded-md hover:bg-[#1A85C7]/90 transition-colors duration-200"
        >
          Send
        </button>
      </div>
    </form>
  )
}

export default ContactForm