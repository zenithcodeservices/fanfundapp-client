import Benefit from '../components/Benefit'

const DATA = [
  {
    header: 'Invest in Funding Rounds',
    description: "Invest in artists that you believe will grow. Funding rounds are created by the platform’s talented artists to raise capital and share ownership with fans.",
    image: 'images/benefits-vector-set-invest.png',
    imageAltTag: 'benefit-1',
    bullets: [
      'Artists receive funding.',
      'Fans receive equity in the artists future streaming revenue.',
      'Fans receive additional perks.'
    ],
    reversed: false
  },
  {
    header: 'Monitor your Portfolio',
    description: `You can invest in multiple artists and monitor your portfolio of investments in one place.    `,
    image: 'images/benefits-vector-set-growth.png',
    imageAltTag: 'benefit-2',
    bullets: [
      'Artists can grow or decrease in value over the allotted time frame.',
      "Fans can monitor the artists success using the platofrm's FFXP metric."
    ],
    reversed: true
  },
  {
    header: 'Claim your Rewards',
    description: `If the artist grows during the allotted time period, you will share their success and receive a portion of their streaming royalties, as well as other rewards.`,
    image: 'images/benefits-vector-set-reward.png',
    imageAltTag: 'benefit-3',
    bullets: [
      'If the artist grows during the funding round, the fan receives a proportional reward.'
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
