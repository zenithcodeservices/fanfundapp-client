import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import SEO from '../components/SEO'
import LoginHeader from '../components/LoginHeader'
import SignInForm from '../components/SignInForm'
import SignUpForm from '../components/SignUpForm'
import Layout from '../components/Layout'

function LoginPage() {
  const pageHeader = `Login | ${process.env.siteTitle}`
  const [isSigningIn, setIsSigningIn] = useState(true)

  const toggleIsSigningIn = () => {
    setIsSigningIn(!isSigningIn)
  }
  const router = useRouter();

  useEffect(() => {
    if(!router.isReady) return;
    setIsSigningIn(true)
    console.log(router.query.signup)
      if(router.query.signup) {
        if(router.query.signup.toString() === "1") {
          setIsSigningIn(false)
        }
      }


  }, [router.isReady, router.query])

  return (
    <div className="container text-white mx-auto py-6 sm:py-12">
      <SEO title={pageHeader} />
      {
        isSigningIn ?
          <div>
            <LoginHeader
              toggleIsSigningIn={toggleIsSigningIn}
              header={`Login to your account`}
              question={`Don't have an account?`}
              cta={`Sign up`}
            />
            <SignInForm />
          </div>
          :
          <div>
            <LoginHeader
              toggleIsSigningIn={toggleIsSigningIn}
              header={`Create your account`}
              question={`Already have an account?`}
              cta={`Sign in`}
            />
            <SignUpForm />
          </div>
      }
    </div>
  )
}

LoginPage.Layout = Layout


export default LoginPage
