import { Container, Row, Col } from "react-bootstrap";
// import AOS from 'aos';



function Projects() {

    // AOS.init();

    return (
        <>
            <Container id="projects">
                <Row>
                    {/* <Col data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"> */}
                    <Col>
                        <h2 className="sm d-md-none">My Projects</h2>

                        <h2 className="md d-none d-md-block d-lg-none">My Projects</h2>

                        <h2 className="lg d-none d-lg-block d-xl-none">My Projects</h2>

                        <h2 className="xl d-none d-xl-block">My Projects</h2>
                    </Col>
                </Row>

                {/* <Container data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500" data-aos-offset="200"> */}
                <Container>
                    <Row>
                        <Col md={6} lg={3} className="d-flex flex-column align-items-center">
                            <img src="src/assets/Blue and Orange Modern Professional Business Conference Instagram Post.png" alt="" width={200} />
                            <p>
                                <a href="" className="link-offset-2 link-underline link-underline-opacity-0"><i className="p_projects bi bi-arrow-return-right text-white fs-5"> Download my Curriculum</i></a>
                            </p>
                        </Col>

                        <Col md={6} lg={3} className="d-flex flex-column align-items-center">
                            <img src="src/assets/Blue and Orange Modern Professional Business Conference Instagram Post.png" alt="" width={200} />
                            <p>
                                <a href="" className="link-offset-2 link-underline link-underline-opacity-0"><i className="p_projects bi bi-arrow-return-right text-white fs-5"> Download my Curriculum</i></a>
                            </p>
                        </Col>

                        <Col md={6} lg={3} className="d-flex flex-column align-items-center">
                            <img src="src/assets/Blue and Orange Modern Professional Business Conference Instagram Post.png" alt="" width={200} />
                            <p>
                                <a href="" className="link-offset-2 link-underline link-underline-opacity-0"><i className="p_projects bi bi-arrow-return-right text-white fs-5"> Download my Curriculum</i></a>
                            </p>
                        </Col>

                        <Col md={6} lg={3} className="d-flex flex-column align-items-center">
                            <img src="src/assets/Blue and Orange Modern Professional Business Conference Instagram Post.png" alt="" width={200} />
                            <p>
                                <a href="" className="link-offset-2 link-underline link-underline-opacity-0"><i className="p_projects bi bi-arrow-return-right text-white fs-5"> Download my Curriculum</i></a>
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6} lg={3} className="d-flex flex-column align-items-center">
                            <img src="src/assets/Blue and Orange Modern Professional Business Conference Instagram Post.png" alt="" width={200} />
                            <p>
                                <a href="" className="link-offset-2 link-underline link-underline-opacity-0"><i className="p_projects bi bi-arrow-return-right text-white fs-5"> Download my Curriculum</i></a>
                            </p>
                        </Col>

                        <Col md={6} lg={3} className="d-flex flex-column align-items-center">
                            <img src="src/assets/Blue and Orange Modern Professional Business Conference Instagram Post.png" alt="" width={200} />
                            <p>
                                <a href="" className="link-offset-2 link-underline link-underline-opacity-0"><i className="p_projects bi bi-arrow-return-right text-white fs-5"> Download my Curriculum</i></a>
                            </p>
                        </Col>

                        <Col md={6} lg={3} className="d-flex flex-column align-items-center">
                            <img src="src/assets/Blue and Orange Modern Professional Business Conference Instagram Post.png" alt="" width={200} />
                            <p>
                                <a href="" className="link-offset-2 link-underline link-underline-opacity-0"><i className="p_projects bi bi-arrow-return-right text-white fs-5"> Download my Curriculum</i></a>
                            </p>
                        </Col>

                        <Col md={6} lg={3} className="d-flex flex-column align-items-center">
                            <img src="src/assets/Blue and Orange Modern Professional Business Conference Instagram Post.png" alt="" width={200} />
                            <p>
                                <a href="" className="link-offset-2 link-underline link-underline-opacity-0"><i className="p_projects bi bi-arrow-return-right text-white fs-5"> Download my Curriculum</i></a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default Projects;