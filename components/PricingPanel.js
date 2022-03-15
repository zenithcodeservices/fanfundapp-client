import { CheckIcon } from '@heroicons/react/solid'
import PrimaryButton from '../components/PrimaryButton'

function PricingPanel({ plan, price, description, features, cta }) {

  return (
    <div className="rounded-lg shadow-lg mt-12 mx-auto border border-palette-lighter w-full max-w-sm md:w-1/3 font-primary">
      <div className="px-6 py-4 h-40 space-y-3">
        <h2 className="font-medium text-lg lg:text-xl text-palette-primary">{plan}</h2>
        <h2 className="font-semibold text-xl lg:text-2xl  text-white">{price}</h2>
        <p className="mt-4  text-white">{description}</p>
      </div>
      <div className="w-full border border-gray-100"></div>
      <h2 className="px-6 py-4 text-lg font-medium  text-white">What's included?</h2>
      <div className="px-6 h-56">
        {features.map((feature, index) =>
          <div key={index} className="py-1">
            <CheckIcon className="mr-2 h-6 w-6 inline-flex text-green-500" />
            <span className=" text-white text-sm">{feature}</span>
          </div>
        )}
      </div>
      <div className="pt-4 pb-6 text-center">
        <PrimaryButton
          text={cta}
        />
      </div>
    </div >
  )
}

export default PricingPanel
