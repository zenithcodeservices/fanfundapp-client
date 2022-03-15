import Service from '../components/Service'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const DATA = [
  {
    heading: "Invest in Funding Rounds",
    paragraph: "Invest in  artists that you believe will grow. ‘Funding rounds’ are created by the platform’s talented artists to raise capital and share ownership with fans.",
    icon: "chart",
  },
  {
    heading: "Track your Portfolio",
    paragraph: "You can invest in multiple artists and monitor your portfolio of investments in one place.",
    icon: "pie",
  },
  {
    heading: "Claim your Rewards",
    paragraph: "If the artist grows during the allotted time period, you will share their success and receive a portion of their streaming royalties, as well as other rewards.",
    icon: "money",
  },
]

function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
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
    visible: { opacity: 1, translateY: 0 },
    hidden: { opacity: 0, translateY: 60, },
  }

  return (
    <div className="transform -translate-y-20">
      <motion.div
        ref={ref}
        className="pt-6 md:pt-12 flex flex-col items-center space-y-12 md:space-y-0 md:flex-row md:justify-around max-w-6xl mx-auto"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={list}
      >
        {DATA.map(item => (
          <Service
            key={item.heading}
            heading={item.heading}
            paragraph={item.paragraph}
            icon={item.icon}
            variants={childItem}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default Services
