import BenefitImage from '../components//BenefitImage'
import BenefitDescription from '../components//BenefitDescription'
import { classNames } from '../utils/helpers'

function Benefit({ header, description, image, imageAltTag, bullets, reversed }) {

  return (
    <div
      className={classNames(
        reversed ? 'flex flex-col lg:flex-row-reverse' : 'flex flex-col lg:flex-row',
        'justify-center items-center space-y-6 lg:space-y-0 max-w-6xl mx-auto lg:space-x-6'
      )}
    >
      <BenefitImage 
        image={image} 
        altTag={imageAltTag}
        reversed={reversed}
      />
      <BenefitDescription 
        header={header}
        description={description}
        bullets={bullets}
      />
    </div>
  )
}

export default Benefit
