import { Container } from "react-bootstrap"
import profile from '../assets/img/profile.png';

const Masthead = () => {
  return (
    <header className="masthead text-white text-center">
      <Container className="d-flex align-items-center flex-column">
        <img className="masthead-avatar mb-5" src={profile} alt="..." />
        <h1 className="masthead-heading text-uppercase mb-0">Riko Primada</h1>

        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
        </div>

        <p className="masthead-subheading font-weight-light mb-0">Frontend Engineer - Web Designer</p>
      </Container>
    </header>
  )
}

export default Masthead