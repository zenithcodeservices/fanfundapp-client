import SEO from '../components/SEO'
import PageTitle from '../components/PageTitle'
import Layout from '../components/Layout'

function AboutPage() {
  const pageHeader = `About | Fanfund`
  return (
    <div className="container text-white mx-auto py-6 sm:py-12">
      <SEO title={pageHeader} />
      <PageTitle text="About Us" />
      <p className="text-white font-secondary text-base sm:text-lg max-w-3xl mx-auto px-3 leading-7">
      </p>

      <h2 className="text-3xl leading-7 max-w-3xl font-semibold mb-4 mx-auto px-3 md:mb-0">Problem Statement</h2>
      <br></br>
      <p className="text-white font-secondary text-base sm:text-lg max-w-3xl mx-auto px-3 leading-7">In previous decades the music industry was structured hierarchically, whereby major music labels at the top of this ranking contractually acquired talented artists. The artists would release music and perform concerts according to the specifications outlined by members of their respective organisations. The top down approach was effective when using profitability as a metric for success. However many cases illustrated artists being purposefully mislead by management in relation to contractual agreements which inevitably resulted in the exploitation of the artists.</p>
      <br></br>
      <p className="text-white font-secondary text-base sm:text-lg max-w-3xl mx-auto px-3 leading-7">In recent times there has been a shift in the music industry as an increasing number of artists choose to manage their distribution, marketing, publishing and bookings independently. Wider availability of music through streaming services as well as ease of use of E-Commerce tools, such as Eventbrite, have essentially democratised artist management. The global music industry revenue grew 13.25% in 2018 resulting in total revenue of $18.8 billion.<sup>[7]</sup> Streaming became the majority of label revenue at 51% and outperforms legacy formats with a growth of 30% year on year.<sup>[7]</sup> Despite major labels accounting for 69.2% of total market share, direct artists have grown at nearly four times the rate of the overall market as streaming markets emerge in countries such as, Mexico, Brazil, Japan, and Germany.<sup>[7]</sup></p>
      <br></br>
      <p className="text-white font-secondary text-base sm:text-lg max-w-3xl mx-auto px-3 leading-7">The product of the modernisation of the music industry is an environment in which individuals are no longer required to rely on the existing infrastructure and relationships previously built by these larger institutions. Consequently, revenue is redistributed from the top of this hierarchy to the original content producers &mdash;providing a solution to the apparent wealth inequality between labels and their contributors. Provided that an artist has a substantial and engaging fan base, the tools are available for them to be profitable.</p>
      <br></br>
      <p className="text-white font-secondary text-base sm:text-lg max-w-3xl mx-auto px-3 leading-7">Contrarily there is no support structure for artists in the &lsquo;growth phase&rsquo; between their founding and eventual exposure to a more mainstream audience.</p>
      <br></br>
      <p className="text-white font-secondary text-base sm:text-lg max-w-3xl mx-auto px-3 leading-7">The &lsquo;growth phase&rsquo; artists lack the funding and promotion that other artists might receive after acquisition by major labels such as Universal Music Group, Sony Music Group, Warner Music Group and their respective divisions. Additionally, artists who experience fast paced growth early in their respective careers are often sourced by talent acquisition teams offering sub-par contracts and result in a disgruntled fan base. It is commonplace for restricted release cycles of music to minimise sales competition with other label artists and, as a result, maximise profit. <sup>[3]</sup></p>
      <br></br>
    </div>
  )
}

AboutPage.Layout = Layout

export default AboutPage
