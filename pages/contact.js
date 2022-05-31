import React, { useState } from 'react'
import SEO from '../components/SEO'
import PageTitle from '../components/PageTitle'
import PrimaryButton from '../components/PrimaryButton'
import Layout from '../components/Layout'

import { API } from 'aws-amplify'
import { createCandidate } from '../src/graphql/mutations'
import ReCAPTCHA from "react-google-recaptcha";
import {createRef} from "react"



function ContactPage() {
  const [email, setEmail] = useState('johndoe@email.com')
  const [name, setName] = useState('John Doe')
  const [message, setMessage] = useState('Say something...')
  const [successDialog, setSuccessDialog] = useState(false)
  const pageHeader = `Contact Us | Fanfund`
  const recaptchaRef = createRef();


  async function handleSubmit(event) {
    event.preventDefault()
    //alert(`${name} with email ${email} submitted a form with the following message: ${message}`)
    recaptchaRef.current.execute();
  }

  const onReCAPTCHAChange = async (captchaCode) => {
  // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if(!captchaCode) {
      return;
    }
    // Else reCAPTCHA was executed successfully so proceed with the 
    // alert
    try {
      await API.graphql({
        query: createCandidate,
        variables: {
          input: {
            name,
            email,
            content: message
          },
        },
      }).then(result => {
        console.log("result")
        console.log(result)
        document.getElementById("contactform").reset();
        setSuccessDialog(true)
      })
      
    } catch (err) {
      console.log("err")
        console.log(err)
    }
    // Reset the reCAPTCHA so that it can be executed again if user 
    // submits another email.
    recaptchaRef.current.reset();
  }
  

  return (
    <div className="container text-white mx-auto py-6 sm:py-12">
      <SEO title={pageHeader} />
      <PageTitle text="Contact Us" />
      {successDialog && (
          <div className="w-full px-4 py-12 mx-auto max-w-2xl font-secondary">
            <div  className="bg-green-50 p-2 rounded-lg-md border border-green-500 text-green-600 font-semibold">
              Email received, you&apos;ll receive confirmation soon.
            </div>
          </div>
        )}
      <form id="contactform" className="w-full px-4 py-12 mx-auto max-w-2xl font-secondary" onSubmit={handleSubmit}>
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        onChange={onReCAPTCHAChange}
      />
        <label
          className="block mb-2 text-xs font-bold uppercase text-white"
          htmlFor="first-name"
        >
          Name
        </label>

        <input
          className="w-full mb-6 form-input text-gray-900 border border-gray-300 rounded-lg p-2
          focus:outline-none focus:ring-1 focus:ring-palette-primary"
          id="name"
          placeholder="John Doe"
          type="text"
          required
          onChange={(e) => setName(e.target.value)}
        />

        <label
          className="block mb-2 text-xs font-bold uppercase text-white"
          htmlFor="email"
        >
          Email
        </label>

        <input
          className="w-full mb-6 text-gray-900 form-input border border-gray-300 rounded-lg p-2 
          focus:outline-none focus:ring-1 focus:ring-palette-primary"
          id="email"
          placeholder="johndoe@email.com"
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label
          className="block mb-2 text-xs font-bold uppercase text-white"
          htmlFor="message"
        >
          Message
        </label>

        <textarea
          className="w-full mb-6 text-gray-900 form-textarea border border-gray-300 rounded-lg p-2
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