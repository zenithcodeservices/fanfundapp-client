import { useState } from 'react'
import SEO from '../components/SEO'
import PageTitle from '../components/PageTitle'
import Toggle from '../components/Toggle'
import PricingSection from '../components/PricingSection'
import Layout from '../components/Layout'

function PricingPage() {
  const pageHeader = `Pricing | ${process.env.siteTitle}`
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="container text-white mx-auto py-6 sm:py-12">
      <SEO title={pageHeader} />
      <PageTitle text="Pricing" />
      <div className="flex items-center justify-center space-x-4 font-primary font-medium  text-white text-sm">
        <div>Monthly</div>
        <Toggle
          enabled={enabled}
          setEnabled={setEnabled}
        />
        <div>Annual</div>
      </div>
      <PricingSection enabled={enabled} />
    </div>
  )
}
PricingPage.Layout = Layout


export default PricingPage
