import { useState } from 'react'
import SEO from '../components/SEO'
import PageTitle from '../components/PageTitle'
import PrimaryButton from '../components/PrimaryButton'
import Layout from '../components/Layout'

function ContactPage() {
  const [email, setEmail] = useState('johndoe@email.com')
  const [name, setName] = useState('John Doe')
  const [message, setMessage] = useState('Say something...')
  const pageHeader = `Contact Us | ${process.env.siteTitle}`

  function handleSubmit(event) {
    event.preventDefault()
    alert(`${name} with email ${email} submitted a form with the following message: ${message}`)
  }

  return (
    <div className="container text-white mx-auto py-6 sm:py-12">
      <SEO title={pageHeader} />
      <PageTitle text="Contact Us" />
      <form className="w-full px-4 py-12 mx-auto max-w-2xl font-secondary" onSubmit={handleSubmit}>
        <label
          className="block mb-2 text-xs font-bold uppercase text-gray-900"
          htmlFor="first-name"
        >
          Name
        </label>

        <input
          className="w-full mb-6 form-input border border-gray-300 rounded-lg p-2
          focus:outline-none focus:ring-1 focus:ring-palette-primary"
          id="name"
          placeholder="John Doe"
          type="text"
          required
          onChange={(e) => setName(e.target.value)}
        />

        <label
          className="block mb-2 text-xs font-bold uppercase text-gray-900"
          htmlFor="email"
        >
          Email
        </label>

        <input
          className="w-full mb-6 form-input border border-gray-300 rounded-lg p-2 
          focus:outline-none focus:ring-1 focus:ring-palette-primary"
          id="email"
          placeholder="johndoe@email.com"
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label
          className="block mb-2 text-xs font-bold uppercase text-gray-900"
          htmlFor="message"
        >
          Message
        </label>

        <textarea
          className="w-full mb-6 form-textarea border border-gray-300 rounded-lg p-2
          focus:outline-none focus:ring-1 focus:ring-palette-primary"
          id="message"
          placeholder="Say something..."
          rows="8"
          required
          onChange={(e) => setMessage(e.target.value)}
        />

        <PrimaryButton text='Submit' link='/contact' />
      </form>
    </div>
  )
}

ContactPage.Layout = Layout


export default ContactPage