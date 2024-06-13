import { Container } from 'react-bootstrap'

const Portfolio = () => {
  return (
    <section className="page-section portfolio" id="portfolio">
      <Container className="container">
        <h2 className="page-section-heading text-center text-uppercase text-black mb-0">Portofolio</h2>
        <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
        </div>
      </Container>
    </section>
  )
}

export default Portfolio