import { Container, Col, Row } from "react-bootstrap";


function HomePage() {

    return (
        <>
            <Container id="home" className="home justify-content-center">
                <Row>
                    <Col xs={12} md={6} className="d-flex flex-column justify-content-center align-items-center">
                        <h1>Welcome to
                            <br />
                            My Portoflio
                        </h1>
                        <a href="#about" className="btn btn-outline-light mt-4 fs-5 p-3 px-4 rounded-pill">Luigi Iossa / Web Developer</a>
                    </Col>
                    <Col xs={12} md={6} className="d-flex flex-column justify-content-center align-items-center">
                        <img className="mb-4" src="https://github.com/Luigi-stack/Portfolio/blob/main/src/assets/photoprofile.png?raw=true" alt="photo profile" width={600} />
                        <p>
                            <a href="" className="link-offset-2 link-underline link-underline-opacity-0"><i className="bi bi-arrow-return-right text-white fs-5"> Work with me today</i></a>
                        </p>
                    </Col>
                </Row>
            </Container>

        </>
    );

}

export default HomePage;