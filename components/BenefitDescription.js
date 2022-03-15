import { CheckIcon } from '@heroicons/react/solid'

function BenefitDescription({ header, description, bullets }) {
  return (
    <div className="z-10 w-11/12 mx-auto lg:w-1/2 space-y-6 max-w-md">
      <h1 className="font-primary font-bold text-center text-3xl text-gray-900">
        {header}
      </h1>
      <p className="font-secondary text-lg text-gray-700">
        {description}
      </p>
      <ul className="font-secondary text-base text-gray-700 space-y-4">
        {bullets.map((item, index) => (
          <li key={index} className="flex space-x-2">
            <CheckIcon className="h-6 w-6 text-green-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BenefitDescription
