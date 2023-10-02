import { Container, Col, Row } from "react-bootstrap";


function HomePage() {

    return (
        <>
            <Container id="home" className="justify-content-center">
                <Row>
                    <Col xs={12} md={6} className="d-flex flex-column justify-content-center align-items-center">

                        <h1 className="sm d-md-none">Welcome to
                            <br />
                            My Portoflio
                        </h1>

                        <h1 className="md d-none d-md-block d-lg-none">Welcome to
                            <br />
                            My Portoflio
                        </h1>

                        <h1 className="lg d-none d-lg-block d-xl-none">Welcome to
                            <br />
                            My Portoflio
                        </h1>

                        <h1 className="xl d-none d-xl-block">Welcome to
                            <br />
                            My Portoflio
                        </h1>

                        <a href="#about" className="btn btn-outline-light mt-4 p-3 px-4 rounded-pill">Luigi Iossa / Web Developer</a>
                    </Col>

                    <Col xs={12} md={6} className="d-flex flex-column justify-content-center align-items-center">

                        <img className="mb-4 d-none d-md-block d-lg-none" src="https://github.com/Luigi-stack/Portfolio/blob/main/src/assets/photoprofile.png?raw=true" alt="photo profile" width={385} />

                        <img className="img-xl mb-4 d-none d-lg-block" src="https://github.com/Luigi-stack/Portfolio/blob/main/src/assets/photoprofile.png?raw=true" alt="photo profile" width={600} />

                        <img className="my-4 d-md-none" src="https://github.com/Luigi-stack/Portfolio/blob/main/src/assets/photoprofile.png?raw=true" alt="photo profile" width={350} />

                        <p>
                            <a href="#contact" className="link-offset-2 link-underline link-underline-opacity-0"><i className="bi bi-arrow-return-right text-white fs-5"> Start to work with me</i></a>
                        </p>
                    </Col>
                </Row>
            </Container>

        </>
    );

}

export default HomePage;