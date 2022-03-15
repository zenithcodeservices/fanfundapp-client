import { StarIcon } from '@heroicons/react/solid'
import SectionTitle from '../components/SectionTitle'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const DATA = [
  'Feature # 1',
  'Feature # 2',
  'Feature # 3',
  'Feature # 4',
  'Feature # 5',
  'Feature # 6',
  'Feature # 7',
  'Feature # 8',
  'Feature # 9',
]

function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.15,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'beforeChildren',
      },
    },
  }
  
  const childItem = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  

  return (
    <div className="pt-12 sm:pt-16 w-full px-3">
      <SectionTitle
        text="Unmatchable Features"
      />
      <p className="text-gray-500 font-secondary pt-4 max-w-lg mx-auto">
        Commodo aliquip ad labore proident dolore reprehenderit ut minim esse pariatur eiusmod qui excepteur.
      </p>
      <motion.ul
        ref={ref}
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-12 md:gap-10 max-w-6xl mx-auto px-6 py-12 sm:py-16"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={list}
      >
        {
          DATA.map(item => (
            <motion.li 
              key={item} 
              className="flex justify-center items-center space-x-2"
              variants={childItem}
            >
              <StarIcon className="h-6 w-6 text-palette-primary" />
              <span className="font-primary text-xl font-medium text-gray-900">{item}</span>
            </motion.li>
          ))
        }
      </motion.ul>
    </div>
  )
}

export default Features
