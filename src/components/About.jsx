import { Container, Row, Col } from "react-bootstrap";

function About() {
    return (
        <>
            <Container id="about" className="justify-content-center mt-5">
                <Row>
                    <Col xs={12} md={6}  className="">
                        <h2 className="my-5">Who is Luigi?</h2>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <p className="p_about">I'm a Jr. Web Developer. Strong creative and analytical skills. Team player with an eye for detail. After working in the field of international cooperation for a few years I became interested in software development and decided to join the full stack development bootcamp at Epicode School.</p>
                        <hr className="border border-white opacity-100 border-1" />
                    </Col>
                    <Col xs={12} md={6}  className="d-flex flex-column justify-content-center align-items-center">
                        <img className="mb-4" src="https://raw.githubusercontent.com/Luigi-stack/Portfolio/main/src/assets/coding.png" alt="photo profile" width={600} />
                        <p className="ms-5">
                            <a href="" className="link-offset-2 link-underline link-underline-opacity-0"><i className="bi bi-arrow-return-right text-white fs-5"> Download my Curriculum</i></a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About;