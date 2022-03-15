import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Layout = ({ children }) => (
    <div className="overflow-x-hidden min-h-screen flex flex-col justify-between">

      <div>
        <Nav />

        <main>
          {children}
        </main>
      </div>

      <Footer />
    </div>
)

export default Layout
