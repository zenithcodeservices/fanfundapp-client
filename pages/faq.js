import SEO from '../components/SEO'
import PageTitle from '../components/PageTitle'
import FAQs from '../components/FAQs'
import Layout from '../components/Layout'


function FAQPage() {
  const pageHeader = `FAQ | ${process.env.siteTitle}`

  return (
    <div className="container text-white mx-auto py-6 sm:py-12">
      <SEO title={pageHeader} />
      <PageTitle text='Frequenty Asked Questions' />
      <FAQs />
    </div>
  )
}

FAQPage.Layout = Layout


export default FAQPage
