import { Container, Row, Col } from "react-bootstrap";

function Contact() {
    return (
        <>
            <Container id="contact" className="mb-5">
                <Row>
                    <Col>
                        <h2 className="sm mb-5 d-md-none">Reach Out
                            <br />
                            to Me
                        </h2>

                        <h2 className="md my-5 d-none d-md-block d-lg-none">Reach Out
                            <br />
                            to Me
                        </h2>

                        <h2 className="lg my-5 d-none d-lg-block d-xl-none">Reach Out
                            <br />
                            to Me
                        </h2>

                        <h2 className="xl my-5 d-none d-xl-block">Reach Out
                            <br />
                            to Me
                        </h2>

                    </Col>
                </Row>

                <Row className="mb-5">
                    <Col sm={12} md={4} className="d-flex flex-column align-items-center">
                        <h3>Address</h3>
                        <p className="text-secondary fs-5">Rue FN 21, Dakar - Senegal</p>
                    </Col>

                    <Col sm={12} md={4} className="d-flex flex-column align-items-center">
                        <h3>Email</h3>
                        <p><a href="mailto: luigi_iossa@hotmail.com" className="text-secondary fs-5 link-offset-2 link-underline link-underline-opacity-0">luigi_iossa@hotmail.com</a></p>
                    </Col>

                    <Col sm={12} md={4} className="d-flex flex-column align-items-center">
                        <h3>Phone</h3>
                        <p className="text-secondary fs-5">+39 3801520069</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-end my-5">
                        <p>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <a href="https://api.whatsapp.com/send/?phone=393801520069&text&type=phone_number&app_absent=0" className="link-offset-2 link-underline link-underline-opacity-0"><i className="bi bi-arrow-return-right text-white fs-5"> Let's talk to me</i></a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Contact;