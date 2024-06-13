import { Button, Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col lg={4} mb-5 mb-lg-0>
              <h4 className="text-uppercase mb-4">
                <div id="datetime"></div>
              </h4>
            </Col>
            <Col lg={4} className="mb-5 mb-lg-0 text-center">
              <h4 className="text-uppercase mb-4">Around the Web</h4>
              <Button variant="outline-light" className="btn-social mx-1" href="https://github.com/Rikoprim" target="_blank"><i className="fab fa-fw fa-github"></i></Button>
              <Button variant="outline-light" className="btn-social mx-1" href="https://www.twitter.com" target="_blank"><i className="fab fa-fw fa-twitter"></i></Button>
              <Button variant="outline-light" className="btn-social mx-1" href="https://www.linkedin.com/in/riko-primada-a75403181/" target="_blank"><i className="fab fa-fw fa-linkedin-in"></i></Button>
              <Button variant="outline-light" className="btn-social mx-1" href="#"><i className="fab fa-fw fa-facebook-f"></i></Button>
            </Col>
            <Col lg={4} className="text-left">
              {/* <InputGroup className="mb-3">
                <FormControl id="fahrenheit" type="number" placeholder="Fahrenheit" required />
                <Button variant="primary" className="mt-2" id="convertButton">Convert to Celsius</Button>
              </InputGroup>
              <h5 className="mt-2">
                <div id="resultCelsius"></div>
              </h5> */}
            </Col>
          </Row>
        </Container>
      </footer>

      <div className="copyright py-4 text-center text-white">
        <div className="container"><small>&copy; 2024 RikoPrimada. All rights reserved.</small></div>
      </div>
    </>
  )
}

export default Footer