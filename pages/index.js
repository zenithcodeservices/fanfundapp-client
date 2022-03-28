import Hero from '../components/Hero'
import Services from '../components/Services'
import Benefits from '../components/Benefits'
import FinalCTA from '../components/FinalCTA'
import Layout from '../components/Layout'


HomePage.Layout = Layout


function HomePage() {

  return (
    <div className="" style={{ background: '#1a1a1a' }}>
      {/* hero section */}
      <Hero />
      <div className="relative mt-32">
        <div className="absolute inset-0 h-full w-full overflow-hidden mx-auto">
          <div className="w-4/5 h-full mx-auto rounded-full bg-gray-50 transform scale-x-150"></div>
        </div>
        {/* core services */}
        {/* <Services /> */}
        {/* benefits */}
        <Benefits />
      </div>
      {/* testimonials */}
      {/* <Testimonials /> */}
      {/*  features */}
      {/* <Features /> */}
      {/* final call to action */}
      <FinalCTA />
    </div>
  )
}


export default HomePage
