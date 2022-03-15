import { classNames } from '../utils/helpers'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function BenefitImage({ image, reversed, altTag }) {
  const initialStyle = reversed ? { opacity: 0, translateX: 60 } : { opacity: 0, translateX: -60 }
  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      className="z-10 w-full lg:w-1/2 h-96 sm:h-140 flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={ inView ? {opacity: 1, translateX: 0} : initialStyle }
      transition={{ duration: 0.8 }}
    >
      <img
        src={image}
        alt={altTag}
        className={classNames(
          reversed ? 'sm:rounded-br-extraLarge sm:rounded-tl-extraLarge' : 'sm:rounded-bl-extraLarge sm:rounded-tr-extraLarge',
          'w-full h-full max-w-md object-cover mx-auto shadow lg:shadow-lg filter brightness-110'
        )}
      />
    </motion.div>
  )
}

export default BenefitImage
