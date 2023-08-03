import React from 'react'
import {Form, Button, Container, Row, Col} from 'react-bootstrap'
import Image from 'react-bootstrap/Image'



const SigninPage = () => {

    return (
        <Container className='mt-10 body'>
            <Row className='d-flex justify-content-center align-items-center signin-row'>
                <Col xs={6} md={4} className='logo-container'>
                    <Image src='/assets/images/cover.png' alt='brand logo' className='center-logo img-fluid'/>
                </Col>
            </Row>
        </Container>
    )
}

export default SigninPage;