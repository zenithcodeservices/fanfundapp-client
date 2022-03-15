import SectionTitle from '../components/SectionTitle'
import Subscribe from '../components/Subscribe'

function FinalCTA() {
  return (
    <div className="pb-12 text-white sm:pb-16 pt-6 sm:pt-10 w-full px-3 max-w-2xl mx-auto">
      <SectionTitle
        text='Join Our Newsletter'
      />
{/*       <p className=" text-white font-secondary pt-4 pb-8 max-w-lg mx-auto">
        Tempor eu id sint ut est ullamco aliqua id dolore officia veniam anim. Dolore quis qui nisi sint 
        anim ut elit ea nulla deserunt.
      </p>
 */}  
      <br></br>
      <Subscribe />
    </div>
  )
}

export default FinalCTA
