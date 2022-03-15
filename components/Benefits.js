import Benefit from '../components/Benefit'

const DATA = [
  {
    header: 'Benefit #1',
    description: `Ipsum qui exercitation excepteur qui sint consectetur officia quis ex. 
    Amet adipisicing do aute ad tempor ut sit occaecat deserunt esse velit enim anim id. 
    Aliquip cillum eiulgod irure cillum est sunt laboris tempor consequat elit ullamco. 
    Ipsum dolor culpa dolor ea.`,
    image: 'images/benefit-1.jpeg',
    imageAltTag: 'benefit-1',
    bullets: [
      'Cupidatat quis voluptate consequat velit ipsum occaecat.',
      'Cupidatat quis voluptate consequat velit ipsum occaecat.',
      'Cupidatat quis voluptate consequat velit ipsum occaecat.'
    ],
    reversed: false
  },
  {
    header: 'Benefit #2',
    description: `Ipsum qui exercitation excepteur qui sint consectetur officia quis ex. 
    Amet adipisicing do aute ad tempor ut sit occaecat deserunt esse velit enim anim id. 
    Aliquip cillum eiulgod irure cillum est sunt laboris tempor consequat elit ullamco. 
    Ipsum dolor culpa dolor ea.`,
    image: 'images/benefit-2.jpeg',
    imageAltTag: 'benefit-2',
    bullets: [
      'Cupidatat quis voluptate consequat velit ipsum occaecat.',
      'Cupidatat quis voluptate consequat velit ipsum occaecat.',
      'Cupidatat quis voluptate consequat velit ipsum occaecat.'
    ],
    reversed: true
  },
  {
    header: 'Benefit #3',
    description: `Ipsum qui exercitation excepteur qui sint consectetur officia quis ex. 
    Amet adipisicing do aute ad tempor ut sit occaecat deserunt esse velit enim anim id. 
    Aliquip cillum eiulgod irure cillum est sunt laboris tempor consequat elit ullamco. 
    Ipsum dolor culpa dolor ea.`,
    image: 'images/benefit-3.jpeg',
    imageAltTag: 'benefit-3',
    bullets: [
      'Cupidatat quis voluptate consequat velit ipsum occaecat.',
      'Cupidatat quis voluptate consequat velit ipsum occaecat.',
      'Cupidatat quis voluptate consequat velit ipsum occaecat.'
    ],
    reversed: false
  }
]

function Benefits() {
  return (
    <div className="space-y-12 sm:space-y-20 lg:space-y-24 py-4">
      {DATA.map(item => {
        if (item.reversed) {
          return (
            <Benefit
              key={item.header}
              header={item.header}
              description={item.description}
              image={item.image}
              imageAltTag={item.imageAltTag}
              bullets={item.bullets}
              reversed={true}
            />
          )
        } else {
          return (
            <Benefit
              key={item.header}
              header={item.header}
              description={item.description}
              image={item.image}
              imageAltTag={item.imageAltTag}
              bullets={item.bullets}
              reversed={false}
            />
          )
        }
      })}
    </div>
  )
}

export default Benefits
