import { useState } from 'react'

import { Auth } from 'aws-amplify';

import Switch from "react-switch";


function SignUpForm() {  
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [code, setCode] = useState('')
  const [password, setPassword] = useState('')
  const [errorWarning, setErrorWarning] = useState('')
  const [isSignedUp, setIsSignedUp] = useState(false)
  const [isUnconfirmed, setIsUnconfirmed] = useState(false)
  const [isArtist, setIsArtist] = useState(false)

  function toggleSwitch() {
    setIsArtist(!isArtist)
  }

  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(email, code);
      setIsUnconfirmed(false)
    } catch (error) {
        console.log('error confirming sign up', error);
        setErrorWarning(error['message']);
    }
  }


  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('sign up with email', email,'and password', password)
    // you can use errorWarning to display an error if something goes wrong with authentication
    try {
      const { user } = await Auth.signUp({
          username: email,
          password: password,
          attributes: {
              email: email, // optional
              name: firstName,
              family_name: lastName,
          }
      });
      console.log(user);
      setIsSignedUp(true)
      setIsUnconfirmed(true)
    } catch (error) {
      setErrorWarning(error['message']);
    }

  }

  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 font-secondary">
      <div className="max-w-md w-full space-y-8">
        {isSignedUp === false ? (
        <form
        className="mt-8 space-y-4"
        onSubmit={handleSubmit}
        >
            <div style={{display:"flex", justifyContent:"center", gap:"1em"}}>
              <label className="sr-only">First Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none block w-half px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-palette-primary focus:border-palette-primary sm:text-sm"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label className="sr-only">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                className="appearance-none block w-half px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-palette-primary focus:border-palette-primary sm:text-sm"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <label className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-palette-primary focus:border-palette-primary sm:text-sm"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-palette-primary focus:border-palette-primary sm:text-sm"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* 
            <p className=" text-white">{isArtist ? (<span>Artist</span>) : (<span>Fan</span>)}</p>
            <Switch uncheckedIcon={false} checkedIcon={false} onChange={() => toggleSwitch()} checked={!isArtist} />
 */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-semibold rounded-lg text-white bg-palette-primary hover:bg-palette-dark focus:outline-none focus:ring-1 focus:ring-palette-primary focus:ring-offset-2"
            >
              Sign up
          </button>
          </div>
        </form>
        ) : (
          <div className="bg-green-50 p-2 rounded-lg-md border border-green-500 text-green-600 font-semibold">
          Sign Up Successful! Please verify.
          </div>
        )
        }

        {
          errorWarning === '' ?
            null
            :
            <div className="bg-red-50 p-2 rounded-lg-md border border-red-500 text-red-600 font-semibold">
              Error! {errorWarning}
            </div>
        }

        {isUnconfirmed === true ? (
          <div>
          <label className="sr-only">Verification Code</label>
          <input
            id="code"
            name="code"
            type="text"
            required
            className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-palette-primary focus:border-palette-primary sm:text-sm"
            placeholder="Verification Code"
            onChange={(e) => setCode(e.target.value)}
          />
          <button
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-semibold rounded-lg text-white bg-palette-primary hover:bg-palette-dark focus:outline-none focus:ring-1 focus:ring-palette-primary focus:ring-offset-2"
          onClick={() => {
            confirmSignUp()
          }
          }
          >
            Verify
          </button>
          </div>
        ) : (
          <span></span>
        )
        }

        {isUnconfirmed == false && isSignedUp == true && (
          <div className="bg-green-50 p-2 rounded-lg-md border border-green-500 text-green-600 font-semibold">
          Verification Complete.
          </div>
        )}

      </div>
    </div>
  )
}

export default SignUpForm
