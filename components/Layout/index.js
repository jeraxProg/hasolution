import HeadTags from './HeadTags'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {

  return (
    <>
        <HeadTags />
        <Navbar />
        {children}
        <Footer />
    </>
  )
}

export default Layout