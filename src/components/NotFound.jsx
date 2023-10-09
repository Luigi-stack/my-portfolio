import { Container, Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";


function NotFound() {
    return (
        <>
            <Container className='d-flex flex-column align-items-center justify-content-center wh-100 vh-100'>
                <Row>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <span className='display-1 fw-bold me-5'>:(</span>
                        <h1 className="text-white"><span className='display-1 fw-bold'>404</span> <br /> Page Not Found</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/#home" className="btn btn-outline-light mt-4 p-3 px-4 rounded-pill" >Home Page</Link>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default NotFound;