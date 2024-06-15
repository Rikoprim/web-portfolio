import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import cabin from "../assets/img/portofolio/cabin.png";
import circus from "../assets/img/portofolio/circus.png";
import game from "../assets/img/portofolio/game.png";
import { useState } from "react";

const PortfolioItem = ({ item }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="col-md-6 col-lg-4 mb-5">
        <div className="portfolio-item mx-auto" onClick={handleShow}>
          <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div className="portfolio-item-caption-content text-center text-white">
              <i className="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <img className="img-fluid" src={item.image} alt="..." />
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="text-center">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8}>
                <h2 className="portfolio-modal-title text-black text-uppercase mb-0">
                  {item.title}
                </h2>
                <div className="divider-custom">
                  <div className="divider-custom-line"></div>
                  <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                  <div className="divider-custom-line"></div>
                </div>
                <img
                  className="img-fluid rounded mb-5"
                  src={item.image}
                  alt="..."
                />
                <p className="mb-4">{item.description}</p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            <i className="fas fa-xmark fa-fw"></i> Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      image: cabin,
      alt: "Cabin",
      title: "Log Cabin",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      modalTarget: "#portfolioModal1",
    },
    {
      id: 2,
      image: circus,
      alt: "Circus",
      title: "Log Circus",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      modalTarget: "#portfolioModal2",
    },
    {
      id: 3,
      image: game,
      alt: "Game",
      title: "Log Game",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
      modalTarget: "#portfolioModal3",
    },
  ];

  return (
    <section className="page-section portfolio" id="portfolio">
      <Container className="container">
        <h2 className="page-section-heading text-center text-uppercase text-black mb-0">
          Portofolio
        </h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
        </div>

        <div className="row justify-content-center">
          {portfolioItems.map((item) => (
            <PortfolioItem key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
