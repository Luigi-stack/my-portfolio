import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ecommerceImg from '../assets/ecommerce.png'
import linkedinCloneImg from '../assets/linkedin_clone.png'
import netflixCloneImg from '../assets/netflix_clone.png'
import spotifyCloneImg from '../assets/spotify_clone.png'
import weatherAppImg from '../assets/weather_app.png'
// import AOS from 'aos';



function Projects() {

    // AOS.init();

    return (
        <>
            <Container id="projects">
                <Row className="mb-5">
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
                        <Col md={6} lg={4} className="d-flex flex-column align-items-center mb-5 hoveproject">

                            <Link to="https://github.com/Luigi-stack/capstone_project_frontend.git" target="_blank" rel="noopener noreferrer" className="link-offset-2 link-underline link-underline-opacity-0">

                                <img src={ecommerceImg} alt="ecommerce login image" className="img_projects mb-2" width={250} />
                                <p className="d-flex justify-content-center">
                                    <i className="bi bi-arrow-return-right text-white fs-4"> E-commerce Project</i>
                                </p>
                            </Link>

                        </Col>


                        <Col md={6} lg={4} className="d-flex flex-column align-items-center mb-5 hoveproject">

                            <Link to="https://github.com/Luigi-stack/LinkedIn-Build-week3.git" target="_blank" rel="noopener noreferrer" className="link-offset-2 link-underline link-underline-opacity-0">
                                <img src={linkedinCloneImg} alt="profile linkedin image" className="img_projects mb-2" width={250} />
                                <p className="d-flex justify-content-center">
                                    <i className="bi bi-arrow-return-right text-white fs-4"> Linkedin Clone</i>
                                </p>
                            </Link>

                        </Col>

                        <Col md={6} lg={4} className="d-flex flex-column align-items-center mb-5 hoveproject">

                            <Link to="https://github.com/Luigi-stack/projectw3-React-spotify.git" target="_blank" rel="noopener noreferrer" className="link-offset-2 link-underline link-underline-opacity-0">

                                <img src={spotifyCloneImg} alt="home page spotify image" className="img_projects mb-2" width={250} />
                                <p className="d-flex justify-content-center">
                                    <i className="bi bi-arrow-return-right text-white fs-4"> Spotify Clone</i>
                                </p>
                            </Link>

                        </Col>

                        <Col md={6} lg={4} className="d-flex flex-column align-items-center mb-5 hoveproject">

                            <Link to="https://github.com/Luigi-stack/capstone_project_frontend.git" target="_blank" rel="noopener noreferrer" className="link-offset-2 link-underline link-underline-opacity-0">
                                <img src={netflixCloneImg} alt="home page netflix image" className="img_projects mb-2" width={250} />
                                <p className="d-flex justify-content-center">
                                    <i className="bi bi-arrow-return-right text-white fs-4"> Netflix Clone</i>
                                </p>
                            </Link>

                        </Col>

                        <Col md={6} lg={4} className="d-flex flex-column align-items-center hoveproject">

                            <Link to="https://github.com/Luigi-stack/weather-app.git" target="_blank" rel="noopener noreferrer" className="link-offset-2 link-underline link-underline-opacity-0">

                                <img src={weatherAppImg} alt="home page weather app image" className="img_projects mb-2" width={250} />
                                <p className="d-flex justify-content-center">
                                    <i className="bi bi-arrow-return-right text-white fs-4"> Weather App</i>
                                </p>
                            </Link>

                        </Col>


                    </Row>

                    {/* <Row>
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
                    </Row> */}
                </Container>
            </Container>
        </>
    )
}

export default Projects;