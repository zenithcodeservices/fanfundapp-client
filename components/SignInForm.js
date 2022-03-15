import { useState } from 'react'
import ResetPassword from '../components/ResetPassword'

function SignInForm() {
  const [email, setEmail] = useState('')
  const [resetEmail, setResetEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorWarning, setErrorWarning] = useState('')
  const [showPasswordResetModal, setShowPasswordResetModal] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('sign in with email', email, 'and password', password)
    // you can use errorWarning to display an error if something goes wrong with authentication
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
