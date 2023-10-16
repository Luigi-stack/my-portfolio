import { Container, Row, Col } from "react-bootstrap";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaJava, FaTrello, FaGithub } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandVscode } from "react-icons/tb";
import { SiSpring, SiPostman } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { Link } from "react-router-dom";
import AOS from 'aos';


function About() {

    AOS.init();


    return (
        <>
            <Container id="about" className="justify-content-center">
                <Row>
                    <Col xs={12} md={6} className="" data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <h2 className="sm d-md-none">Who is Luigi?</h2>

                        <h2 className="md d-none d-md-block d-lg-none">Who is Luigi?</h2>

                        <h2 className="lg d-none d-lg-block d-xl-none">Who is Luigi?</h2>

                        <h2 className="xl d-none d-xl-block">Who is Luigi?</h2>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <p className="p_about">I am a junior full stack developer with a unique professional background. After working for three years in international cooperation in Senegal, I made the exciting transition to become a full stack developer through a bootcamp at Epicode School (Rome). Today, I combine skills from both worlds; offering fresh and flexible solutions for your projects.</p>
                        <hr className="border border-white opacity-100 border-1" />
                        <Container className="d-flex flex-column">
                            <h2 className="professiona_skills">Professional Skills</h2>
                            <p className="react-icons">
                                <FaHtml5 /> <FaCss3Alt /> <IoLogoJavascript /> <FaReact /> <FaBootstrap /> <TbBrandVscode /> <BiLogoPostgresql /> <SiPostman /> <FaGithub /> <FaTrello /> <FaJava /> <SiSpring />
                            </p>
                            <p className="react-icons">

                            </p>
                        </Container>

                    </Col>

                    <Col xs={12} md={6} className="d-flex flex-column justify-content-center align-items-center" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">

                        <img className="mb-4 d-none d-md-block d-lg-none" src="src/assets/coding.png" alt="photo profile" width={385} />

                        <img className="img-xl mb-4 d-none d-lg-block" src="src/assets/coding.png" alt="photo profile" width={600} />

                        <img className="my-4 d-md-none" src="src/assets/coding.png" alt="photo profile" width={350} />

                        <p className="ms-5">
                        <Link to="src/assets/Luigi_Iossa_CV.pdf" className="text-secondary fs-5 link-offset-2 link-underline link-underline-opacity-0" target="_blank" rel="noopener noreferrer"><i className="bi bi-arrow-return-right text-white fs-5"> Download my Curriculum</i></Link>
                        </p>
                    </Col>
                </Row>
            </Container>


        </>
    )
}

export default About;