import FooterLinkColumn from './FooterLinkColumn'
import SocialIcon from './SocialIcon'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const FIRST_COL = [
  {
    label: 'Start here',
    link: '/'
  },
  {
    label: 'Login',
    link: '/login'
  },
  {
    label: 'Pricing',
    link: '/pricing'
  },
]

const SECOND_COL = [
  {
    label: 'About us',
    link: '/about'
  },
  {
    label: 'Contact us',
    link: '/contact'
  },
  {
    label: 'Frequently Asked Questions',
    link: '/faq'
  },
]

function Footer() {
  return (
    <footer className="bg-palette-gray font-primary text-white-900 pt-10 pb-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-3xl font-semibold mb-4 md:mb-0">
            <span className="text-white">Join our community</span>
            </h2>
            <p className="text-lg mt-2 mb-2 font-secondary text-white-600">
            <span className="text-white">
              Social links to keep you updated
            </span>
            </p>
            <div className="mt-6 space-x-4">
              <SocialIcon icon={faTwitter} url="https://twitter.com" />
              <SocialIcon icon={faFacebook} url="https://www.facebook.com" />
              <SocialIcon icon={faInstagram} url="https://instagram.com" />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex text-white flex-wrap items-top mb-6">
              <FooterLinkColumn
                header="Products"
                items={FIRST_COL}
              />
              <FooterLinkColumn
                header="Resources"
                items={SECOND_COL}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm font-medium py-1 text-white">
              Copyright © {new Date().getFullYear()}{" "}

                Fanfund<br></br>
                <small className="text-muted">A venture owned by OPUS CREATIVES LTD registered in the UK under the Registrar of Companies for England and Wales</small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer