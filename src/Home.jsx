import NavbarPage from './components/Navbar';
import Masthead from './components/Masthead';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Home = () => {
  return (
    <>
      <NavbarPage />
      <Masthead />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default Home