import { Disclosure, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import NavRightButton from '../components/NavRightButton'
import Link from 'next/link'
import UserContext from '../lib/userContext'
import{ classNames } from '../utils/helpers'
import React, { useContext, useState } from "react"
import { Authenticator } from '@aws-amplify/ui-react';
import {Badge} from "reactstrap";



import { Auth } from 'aws-amplify';


const navigation = [
  // { name: 'About', href: '/about' },
  // { name: 'Dashboard', href: '/dashboard' },
  // { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' }
  // { name: 'Pricing', href: '/pricing' },
]

/* const [signedIn, setSignedIn]  = useState(false)

useEffect(() => {
  if(UserContext.username !== null){
    setSignedIn(true)
  }
}) */


async function signOut() {
  try {
    console.log("Printing UserContext")
    console.log(UserContext.username)
    console.log("Signing out")

      UserContext.username = null
      UserContext.password = null
      UserContext.img = ''
      console.log("Printing UserContext")
      console.log(UserContext.username)
      await Auth.signOut();
      

  } catch (error) {
      console.log('error signing out: ', error);
  }
}


function Nav(user) {
  return (
    <>
    <Disclosure as="nav" className="" style={{ background: '#1a1a1a' }}>
        {({ open }) => (
          <>
            <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 font-primary">
              <div className="relative flex items-center justify-between h-16 sm:h-20">
                <Link passHref href='/'>
                  <p className="flex items-center" style={{ textDecoration: 'none', cursor: 'pointer', marginTop:'1em' }} href="/">
                    <img
                      className="h-14 w-auto"
                      src="/icon.svg"
                      alt="logo" />
                    <span className="font-semibold text-md sm:text-4xl md:text-5xl text-white ">
                      {/* <span className="text-palette-primary">Fanfund</span> */}
                      <span>Fanfund</span>
                    </span>
                    <Badge style={{fontWeight:"500", marginLeft:"1em"}} color="secondary" pill>
                      Pre-Alpha
                    </Badge>

                  </p>
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
                  <div style={{margin:'1em 1em 0em 0em'}} className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="hidden sm:block sm:ml-6">
                      <div className="flex items-center space-x-4 text-sm text-white">
                        {navigation.map((item) => (
                          <Link
                            passHref
                            key={item.name}
                            href={item.href}
                          >
                            <p
                              style={{ textDecoration: 'none', cursor: 'pointer' }}
                              className='text-white hover:text-palette-dark px-3 py-2 rounded-md font-medium'
                            >
                              {item.name}
                            </p>
                          </Link>
                        ))}
                        {(UserContext.username === undefined || UserContext.username === null) ? (
                          <><Link
                            passHref
                            key="Login"
                            href="/login"
                          >
                            <p
                              style={{ textDecoration: 'none', cursor: 'pointer' }}
                              className='text-white hover:text-palette-dark px-3 py-2 rounded-md font-medium'
                            >
                              Login
                            </p>
                          </Link><NavRightButton
                              text='Sign Up'
                              layout="desktop" /></>
                        ) : (
                          <><Link
                              key="Logout"
                              href="/"
                            >
                              <p
                                style={{ textDecoration: 'none', cursor: 'pointer' }}
                                onClick={() => signOut()}
                                className='text-white hover:text-palette-dark px-3 py-2 rounded-md font-medium'
                              >
                                Logout
                              </p>
                            </Link>
                            <Link href="/nft-drops">
                                <p
                                  style={{ textDecoration: 'none', cursor: 'pointer' }}
                                  className={classNames(
                                    'px-4 py-2',
                                    'bg-palette-primary rounded-md text-black font-medium hover:bg-palette-dark'
                                  )}
                                >Dashboard</p>
                              </Link></>
                        )}
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
                        <p
                          style={{ textDecoration: 'none', cursor: 'pointer' }}
                          className='text-white hover:text-palette-dark'
                        >
                          {item.name}
                        </p>
                      </Link>
                    </Disclosure.Button>
                  ))}

                  {(UserContext.username === undefined || UserContext.username === null) ? (
                          <>
                          <Disclosure.Button
                          key="Login"
                          className='w-full block px-3 py-4 font-medium border-b border-gray-300'
                        ><Link
                            passHref
                            key="Login"
                            href="/login"
                          >
                            <p
                              style={{ textDecoration: 'none', cursor: 'pointer' }}
                              className='text-white hover:text-palette-dark px-3 py-2 rounded-md font-medium'
                            >
                              Login
                            </p>
                          </Link></Disclosure.Button>
                          <Disclosure.Button
                          key="Sign Up"
                          className='w-full block px-3 py-4 font-medium border-b border-gray-300'
                          >
                          <NavRightButton
                              text='Sign Up'
                              layout="mobile" /></Disclosure.Button></>
                        ) : (
                          <><Disclosure.Button
                          key="Logout"
                          className='w-full block px-3 py-4 font-medium border-b border-gray-300'
                          >
                            <Link
                              key="Logout"
                              href="/"
                            >
                              <p
                                style={{ textDecoration: 'none', cursor: 'pointer' }}
                                onClick={() => signOut()}
                                className='text-white hover:text-palette-dark px-3 py-2 rounded-md font-medium'
                              >
                                Logout
                              </p>
                            </Link>
                            </Disclosure.Button>
                            <Disclosure.Button
                            key="Dashboard"
                            className='w-full block px-3 py-4 font-medium border-b border-gray-300'
                            >
                            <Link href="/dashboard">
                                <p
                                  style={{ textDecoration: 'none', cursor: 'pointer' }}
                                  className={classNames(
                                    'px-4 py-2',
                                    'bg-palette-primary rounded-md text-black font-medium hover:bg-palette-dark'
                                  )}
                                >Dashboard</p>
                              </Link></Disclosure.Button></>
                        )}


                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure></>
  )
}

export default Nav
