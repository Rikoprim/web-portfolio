import { Container } from "react-bootstrap"
import ContactForm from "./ContactForm"

const Contact = () => {
  return (
    <section className="page-section" id="contact">
      <Container className="container">
        <h2 className="page-section-heading text-center text-uppercase text-black mb-0">Contact Me</h2>
        <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
        </div>

        <ContactForm />
      </Container>
    </section>
  )
}

export default Contact