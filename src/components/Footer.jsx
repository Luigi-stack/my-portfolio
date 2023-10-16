import { useEffect, useState } from "react";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {

    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const intervalId = setInterval(() => {

            setCurrentYear(new Date().getFullYear());

        }, 1000 * 60 * 60 * 24 * 365);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <>
            <Container className="d-flex flex-column align-items-center justify-content-center mb-4">
                <Row>
                    <Col>
                        <span className="text-secondary">© Luigi Iossa {currentYear}</span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="https://github.com/Luigi-stack/" className="text-secondary fs-3 me-4 link-offset-2 link-underline link-underline-opacity-0 icon_footer" target="_blank" rel="noopener noreferrer"><AiFillGithub /></Link>
                        <Link to="https://www.linkedin.com/in/luigi-iossa-fullstack-developer/" className="text-secondary fs-3 me-4 link-offset-2 link-underline link-underline-opacity-0 icon_footer" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></Link>
                        <Link to="https://www.instagram.com/luluilu/" className="text-secondary fs-3 link-offset-2 link-underline link-underline-opacity-0 icon_footer" target="_blank" rel="noopener noreferrer"><AiFillInstagram /></Link>
                    </Col>
                </Row>
            </Container>



        </>
    );
}

export default Footer;

