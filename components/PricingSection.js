import PricingPanel from './PricingPanel'

const DATA = [
  {
    plan: 'Basic',
    monthlyPrice: '$9.99/month',
    annualPrice: '$99.99/year',
    description: 'Get all our basic features in one simple plan.',
    features: [
      'Basic Feature #1',
      'Basic Feature #2'
    ],
    cta: 'Get started',
  },
  {
    plan: 'Standard',
    monthlyPrice: '$19.99/month',
    annualPrice: '$199.99/year',
    description: 'Get all our standard features in one simple plan.',
    features: [
      'Basic Feature #1',
      'Basic Feature #2',
      'Pro Feature #1',
      'Pro Feature #2',
    ],
    cta: 'Get started',
  },
  {
    plan: 'Professional',
    monthlyPrice: '$29.99/month',
    annualPrice: '$299.99/year',
    description: 'Get all our professional features in one simple plan.',
    features: [
      'Basic Feature #1',
      'Basic Feature #2',
      'Pro Feature #1',
      'Pro Feature #2',
      'Pro Feature #3',
      'Pro Feature #4'
    ],
    cta: 'Get started',
  },
]

function PricingSection({ enabled }) {

  return (
    <div className="px-2 sm:px-4 lg:px-8 mx-auto text-white w-full max-w-6xl">
      <div className="flex flex-col md:space-x-4 md:flex-row justify-center items-center">
        {
          DATA.map(item => (
            enabled ?
              <PricingPanel
                key={item.plan}
                plan={item.plan}
                price={item.annualPrice}
                description={item.description}
                features={item.features}
                cta={item.cta}
                enabled={enabled}
              />
              :
              <PricingPanel
                key={item.plan}
                plan={item.plan}
                price={item.monthlyPrice}
                description={item.description}
                features={item.features}
                cta={item.cta}
                enabled={enabled}
              />
          ))
        }
      </div>
    </div>
  )
}

export default PricingSection
