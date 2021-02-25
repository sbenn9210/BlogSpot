import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown, Image, Container, Row, Col} from 'react-bootstrap';


const NavigationBar = () => {
  return (
    <Navbar >
    <Container className='head'>
      <Navbar.Brand href='/'>BlogSpot</Navbar.Brand>
      <Row>
      <Col className='bookmark'>
      <Nav.Link className='' href='#home'>
        <i className='far fa-bookmark fa-2x'></i>
      </Nav.Link>
      </Col>
      <NavDropdown
        title={
          <Image
            roundedCircle
            src='https://www.ulyssessalinas.com/img/uly.jpg'
            style={{ height: '50px' }}
          />
        }
        id='basic-nav-dropdown'
      >
        <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
        <NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
        <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
      </NavDropdown>
      </Row>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
