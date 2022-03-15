import { ChartBarIcon, ChartPieIcon, CashIcon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'

function Service({ heading, paragraph, icon, variants }) {
  function getIcon() {
    if(icon === 'chart') {
      return <ChartBarIcon className="h-10 w-10 mx-auto bg-palette-lighter p-2 rounded-lg text-palette-primary" />
    } else if(icon === 'pie') {
      return <ChartPieIcon className="h-10 w-10 mx-auto bg-palette-lighter p-2 rounded-lg text-palette-primary" />
    } else {
      return <CashIcon className="h-10 w-10 mx-auto bg-palette-lighter p-2 rounded-lg text-palette-primary" />
    }
  }

  return (
    <motion.div 
      variants={variants}
      className="z-10 bg-white space-y-4 text-center px-3 py-6 rounded-lg shadow-sm border border-palette-lighter"
    >
      {getIcon()}
      <h1 className="font-primary font-bold text-sm lg:text-base text-gray-900">{heading}</h1>
      <p className="font-secondary text-xs lg:text-sm text-gray-500 max-w-[18rem]">
        {paragraph}
      </p>
    </motion.div>
  )
}

export default Service
