import { useState } from 'react'
import ResetPassword from '../components/ResetPassword'
import UserContext from '../lib/userContext'
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router'


function SignInForm() {
  const [email, setEmail] = useState('')
  const [resetEmail, setResetEmail] = useState('')
  const [password, setPassword] = useState('')
  const [code, setCode] = useState('')
  const [errorWarning, setErrorWarning] = useState('')
  const [successDialog, setSuccessDialog] = useState('')
  const [showPasswordResetModal, setShowPasswordResetModal] = useState(false)
  const [isUnconfirmed, setIsUnconfirmed] = useState(false)
  const [isUnconfirmedResolved, setIsUnconfirmedResolved] = useState(false)
  
  /*
  const [state, dispatch] = useReducer(reducer, initialState)
  const {
    username,
    password,
    attributes: {
      email
    }
  } = state

  const userContext = React.createContext({
    username: null,
    password: null,
    attributes: {
        email: null // optional
        // other custom attributes 
    }
  }) */
  const router = useRouter()

  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(email, code);
      setIsUnconfirmedResolved(false)
    } catch (error) {
        console.log('error confirming sign up', error);
        if(error['message'] === "User cannot be confirmed. Current status is CONFIRMED"){
          setErrorWarning("")
          setSuccessDialog("User confirmed, please login")
        }
        else {
          setErrorWarning(error['message']);
        }
    }
  }

  async function resendConfirmationCode() {
    try {
        await Auth.resendSignUp(email);
        console.log('code resent successfully');
        setSuccessDialog('Code resent successfully')
    } catch (err) {
        console.log('error resending code: ', err);
    }
}


  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('sign in with email', email, 'and password', password)
    // you can use errorWarning to display an error if something goes wrong with authentication
    try {
      const user = await Auth.signIn(email, password);
      console.log(user)
      console.log(user.username)
      console.log(Auth.currentUserInfo())
      // setSuccessDialog('Sign in successful!')
      setIsUnconfirmed(false)
      setErrorWarning('')
      UserContext.username = user.username
      router.push('/nft-drops', undefined, { shallow: true })
      //UserContext.attributes['email'] = email

    } catch (error) {
        console.log('error signing in', error);
        setErrorWarning(error['message'])
        if (error['message'] === "User is not confirmed.") {
          setIsUnconfirmed(true)
        }
    }

  }

  const sendResetEmail = () => {
    console.log('reset email!', resetEmail)
  }

  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 font-secondary">
      <div className="max-w-md w-full space-y-8 relative">
        <ResetPassword
          showPasswordResetModal={showPasswordResetModal}
          setShowPasswordResetModal={setShowPasswordResetModal}
          sendResetEmail={sendResetEmail}
          setResetEmail={setResetEmail}

        />
        <form
          className="mt-8 space-y-4"
          onSubmit={handleSubmit}
        >
          <div className="rounded-md shadow-sm space-y-4">
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
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-semibold rounded-lg text-white bg-palette-primary hover:bg-palette-dark focus:outline-none focus:ring-1 focus:ring-palette-primary focus:ring-offset-2"
            >
              Sign in
          </button>
          </div>
        </form>
        <div className="flex justify-center">
          <button
            className="font-semibold text-palette-primary hover:text-palette-dark cursor-pointer focus:outline-none focus:ring-1 focus:ring-palette-primary focus:ring-offset-4 rounded"
            onClick={() => setShowPasswordResetModal(true)}
          >
            Forgot your password?
            </button>
        </div>



        {isUnconfirmed === true && (
          <><div className="flex justify-center">
            <button
              className="font-semibold text-palette-primary hover:text-palette-dark cursor-pointer focus:outline-none focus:ring-1 focus:ring-palette-primary focus:ring-offset-4 rounded"
              onClick={() => resendConfirmationCode(true)}
            >
              Re-send Confirmation
            </button>
          </div><div>
              <label className="sr-only">Verification Code</label>
              <input
                id="code"
                name="code"
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-palette-primary focus:border-palette-primary sm:text-sm"
                placeholder="Verification Code"
                onChange={(e) => setCode(e.target.value)} />
              <button
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-semibold rounded-lg text-white bg-palette-primary hover:bg-palette-dark focus:outline-none focus:ring-1 focus:ring-palette-primary focus:ring-offset-2"
                onClick={() => {
                  confirmSignUp();
                } }
              >
                Verify
              </button>
            </div></>
        )
        }

        {isUnconfirmedResolved == true  && (
          <div className="bg-green-50 p-2 rounded-lg-md border border-green-500 text-green-600 font-semibold">
          Verification Complete.
          </div>
        )}

      {
          successDialog === '' ?
            null
            :
            <div className="bg-green-50 p-2 rounded-lg border border-green-500 text-green-600 font-semibold">
              {successDialog}
            </div>
        }

        {
          errorWarning === '' ?
            null
            :
            <div className="bg-red-50 p-2 rounded-lg border border-red-500 text-red-600 font-semibold">
              Error! {errorWarning}
            </div>
        }
      </div>
    </div>
  )
}

export default SignInForm
