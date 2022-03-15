import { Disclosure, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import NavRightButton from '../components/NavRightButton'
import Link from 'next/link'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Portal', href: '/portal' },
  // { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
  // { name: 'Pricing', href: '/pricing' },
  { name: 'Login', href: '/login' },
]

function Nav() {
  return (
    <Disclosure as="nav" className=""  style={{ background: '#1a1a1a' }}>
      {({ open }) => (
        <>
          <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 font-primary">
            <div className="relative flex items-center justify-between h-16 sm:h-20">
              <Link passHref href='/'>
                <a className="flex items-center" style={{ textDecoration: 'none' }} href="/">
                  <img
                    className="h-14 w-auto"
                    src="/icon.svg"
                    alt="logo"
                  />
                  <span className="font-semibold text-md sm:text-4xl md:text-5xl text-white ">
                    {/* <span className="text-palette-primary">Fanfund</span> */}
                    <span>Fanfund</span>
                  </span>

                </a>
              </Link>
              <div>
                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-palette-dark hover:text-palette-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex items-center space-x-4 text-sm text-white">
                      {navigation.map((item) => (
                        <Link
                          passHref
                          key={item.name}
                          href={item.href}
                        >
                          <a
                            style={{ textDecoration: 'none' }}
                            className='text-white hover:text-palette-dark px-3 py-2 rounded-md font-medium'
                          >
                            {item.name}
                          </a>
                        </Link>
                      ))}
                      <NavRightButton
                        text='Sign Up'
                        layout="desktop"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Transition
            show={open}
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel static className="sm:hidden h-screen">
              <div className="py-4 space-y-1 text-center text-base">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    className='w-full block px-3 py-4 font-medium border-b border-gray-300'
                  >
                    <Link
                      href={item.href}
                      passHref
                    >
                      <a
                        style={{ textDecoration: 'none' }}
                        className='text-white hover:text-palette-dark'
                      >
                        {item.name}
                      </a>
                    </Link>
                  </Disclosure.Button>
                ))}
                <div className="pt-6">
                  <NavRightButton
                    text='Sign Up'
                    layout="mobile"
                  />
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}

export default Nav