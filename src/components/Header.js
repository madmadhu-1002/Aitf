'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa'; 
import styles from '@/styles/Header.module.css'

const Header = () => (
  <Navbar expand="lg" bg="light" variant="light">
    <Container fluid>
      <Navbar.Brand as={Link} href="/">
        <Image
          src="/assets/aitf-logo-top 1.jpg"
          alt="AITF Logo"
          width={100}
          height={30}
          priority
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="ms-auto my-2 my-lg-0"
          style={{ maxHeight: '150px' }}
          navbarScroll
        >
          <Nav.Link as={Link} href="/about-us">About Us</Nav.Link>
          <Nav.Link as={Link} href="/car-list">Modifications</Nav.Link>
          <Nav.Link as={Link} href="/accessories">Accessories</Nav.Link>
          <Nav.Link as={Link} href="/support-projects">Support & Projects</Nav.Link>
          <Nav.Link as={Link} href="/contact-us">Contact Us</Nav.Link>
          <Nav.Link as={Link} href="/career">Career</Nav.Link>
        </Nav>

        <Form className={`d-flex ${styles['custom-search-bar']}`}>
          <Form.Control
            type="text"
            placeholder="Type here"
            className={styles['search-input']}
            aria-label="Search"
          />
          <Button className={styles['search-button']}>
            <FaSearch className={styles['me-1']} /> Search
          </Button>
        </Form>

      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
