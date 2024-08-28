'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return
    setIsSubmitting(true)
    try {
      const result = await emailjs.send(
        'service_2o3ubl6', // Replace with your EmailJS Service ID
        'contact_form', // Replace with your EmailJS Template ID
        formState,
        'gSWZkq3QbztcXXRFz' // Replace with your EmailJS Public Key
      )
      console.log(result.text)
      alert('Message sent successfully!')
      setFormState({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to send message. Please try again.')
    }
    setTimeout(() => setIsSubmitting(false), 5000) // 5-second cooldown
  }
  

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }


    
          {/* Contact Section */}
          return (
          <section id="contact" className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-10 text-center">Contact Me</h2>
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onSubmit={handleFormSubmit}
                className="max-w-lg mx-auto"
              >
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleFormChange}
                    rows={4}
                    className="w-full px-3 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={isSubmitting}
                  title={isSubmitting ? "Please wait 5 seconds before sending another message" : "Send Message"}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </motion.form>
            </div>
          </section>
    )
}