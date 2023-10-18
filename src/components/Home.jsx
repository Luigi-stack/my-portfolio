import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AOS from 'aos';
import photoProfile from '../assets/photoprofile.png'

function scrollToSection(event, sectionId) {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function HomePage() {

    AOS.init();

    return (
        <>
            <Container id="home" className="justify-content-center">
                <Row>
                    <Col xs={12} md={6} className="d-flex flex-column justify-content-center align-items-center" data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">

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

                        <Link to="/#about" className="btn btn-outline-light mt-4 p-3 px-4 rounded-pill" onClick={(event) => scrollToSection(event, 'about')}>Luigi Iossa / Web Developer</Link>
                    </Col>

                    <Col xs={12} md={6} className="d-flex flex-column justify-content-center align-items-center" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">

                        <img className="img-md mb-4 d-none d-md-block d-lg-none" src={photoProfile} alt="photo profile" width={385} />

                        <img className="img-xl mb-4 d-none d-lg-block" src={photoProfile} alt="photo profile" width={600} />

                        <img className="my-4 d-md-none" src={photoProfile} alt="photo profile" width={350} />

                        <p>
                            <Link to="/#contact" className="link-offset-2 link-underline link-underline-opacity-0" onClick={(event) => scrollToSection(event, 'contact')}><i className="bi bi-arrow-return-right text-white fs-5"> Start to work with me</i></Link>
                        </p>
                    </Col>
                </Row>
            </Container>

        </>
    );

}

export default HomePage;