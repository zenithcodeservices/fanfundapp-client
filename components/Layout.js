import Nav from '../components/Nav'
import Footer from '../components/Footer'
import UserContext from '../lib/userContext'
import { Auth } from 'aws-amplify'



const Layout = ({ children }) => (
    <div style={{backgroundColor: "#1a1a1a"}} className="overflow-x-hidden min-h-screen flex flex-col justify-between">

    <div>
      <Nav/>

      <main>
        {children}
      </main>
    </div>

    <Footer />
    </div>


)

export default Layout
