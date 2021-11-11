import React from 'react';
import './css/Footer.css'
import { Container, Navbar, NavbarBrand } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <div className="footer" fixed="bottom">  
            <Navbar bg="dark" variant="dark">
                <Container className="justify-content-center  p-0.3">
                    <NavbarBrand style={{fontSize: "16px"}} className="text-center">
                        جميع الحقوق محفوظة لدى
                        <br/>
                        Sooraa © 2021 
                    </NavbarBrand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Footer;
