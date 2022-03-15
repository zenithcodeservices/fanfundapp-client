import PrimaryButton from '../components/PrimaryButton'
import SecondaryButton from '../components/SecondaryButton'
import { motion } from 'framer-motion'

function Hero() {

  return (
    <div className="max-w-6xl mx-auto py-12 flex flex-col md:flex-row space-y-8 md:space-y-0">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
        <div className="max-w-xs lg:max-w-md space-y-10 w-5/6 mx-auto md:w-full text-center md:text-left">
          <h1 className="font-primary font-extrabold text-white-900 text-3xl sm:text-4xl md:text-5xl md:leading-tight">
          <span className="text-white">Invest in Music Artists. <span className="text-palette-primary">Earn early adopter rewards.</span></span>
          </h1>
          <p className="font-secondary text-white text-base md:text-lg lg:text-xl">
            Fanfund is an online platform that allows early adopter fans to invest in growing music artists - providing funding for musicians while simultaneously rewarding their fans' astute judgment.
          </p>
          <div className="flex space-x-4">
            <PrimaryButton
              text="Get Started"
              link="/"
            />
            <SecondaryButton
              text="Contact us"
              link="/contact"
            />
          </div>
        </div>
      </div>
      <motion.div         
        className="w-full md:w-1/2 transform scale-x-125 lg:scale-x-100"
        initial={{ opacity: 0, translateY: 60 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.8, translateY: 0 }}
      >
        <img
          alt="hero-img"
          src="/images/akaimpkmini.jpg"
          className="mx-auto object-cover shadow  rounded-bl-extraLarge w-full h-96 sm:h-112 md:h-120"
        />
      </motion.div>
    </div>
  )
}

export default Hero
