import SectionTitle from '../components/SectionTitle'
import Testimonial from '../components/Testimonial'

const DATA = [
  {
    name: "Alice Doe",
    jobTitle: "CEO, Acme",
    image: "/images/testimonial-image-1.jpeg",
    altTag: 'testimonial-1',
    review: `Ex ad excepteur non sint velit commodo. Culpa velit tempor id do qui. Deserunt commodo tempor mollit eu veniam mollit unt enim.`,
  },
  {
    name: "Bill Doe",
    jobTitle: "CTO, Bezels",
    image: "/images/testimonial-image-2.jpeg",
    altTag: 'testimonial-2',
    review: "Lorem in ipsum reprehenderit officia laborum do. Laborum voluptate adipisicing officia excepteur.",
  },
  {
    name: "Clare Doe",
    jobTitle: "SVP, Coala",
    image: "/images/testimonial-image-3.jpeg",
    altTag: 'testimonial-3',
    review: `Duis nulla esse nisi esse incididunt ipsum tempor velit ipsum ex elit. Adipisicing ea labore consectetur eiusmod occaecat do.`,
  }
]

function Testimonials() {
  return (
    <div className="pt-12 pb-6 sm:pt-16 sm:pb-12">
      <div className="w-full px-2 max-w-6xl mx-auto">
        <SectionTitle 
          text="Here's what our customers are saying"
        />
        <div className="flex flex-col items-center sm:flex-row sm:justify-around space-y-6 sm:space-y-0 pt-12">
          {
            DATA.map(item => (
              <Testimonial
                key={item.name}
                name={item.name}
                jobTitle={item.jobTitle}
                image={item.image}
                altTag={item.altTag}
                review={item.review}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Testimonials
