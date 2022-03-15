import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'

function ResetPassword({ showPasswordResetModal, setShowPasswordResetModal, sendResetEmail, setResetEmail }) {
  const cancelButtonRef = useRef()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(showPasswordResetModal)
  }, [showPasswordResetModal])

  function closeModal() {
    setOpen(false)
    setShowPasswordResetModal(false)
  }

  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        as="div"
        id="modal"
        className="fixed inset-0 z-10 overflow-y-auto"
        initialFocus={cancelButtonRef}
        static
        open={open}
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl rounded-2xl border border-palette-gray-500 shadow bg-white">
              <Dialog.Title
                as="h1"
                className="text-lg font-bold leading-6 text-gray-900 font-primary"
              >
                Reset Password
              </Dialog.Title>
              <div className="py-6 font-secondary">
                <input
                  id="reset-email"
                  name="reset-email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none w-full max-w-sm mx-auto relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-palette-primary focus:border-palette-primary sm:text-sm"
                  placeholder="Email address"
                  onChange={(e) => setResetEmail(e.target.value)}
                />
              </div>

              <div className="w-full space-x-4 flex justify-center mt-2 font-secondary">
                <button
                  className="py-1 px-2 w-32 bg-palette-primary hover:bg-palette-dark rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-palette-dark focus:ring-offset-2"
                  onClick={sendResetEmail}
                >
                  Send Email
                </button>
                <button
                  className="py-1 px-2 w-20 bg-palette-primary hover:bg-palette-dark rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-palette-dark focus:ring-offset-2"
                  onClick={() => closeModal()}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ResetPassword
