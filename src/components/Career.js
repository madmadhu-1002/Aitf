import React from 'react'
import styles from '@/styles/Career.module.css'
import JobCard from '@/app/ui/JobCard'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import { FaSearch } from "react-icons/fa";
import { LuSlidersHorizontal } from "react-icons/lu";
import { Form, InputGroup, Button } from "react-bootstrap";


const Career = () => {
  return (
    <>
      <div className="min-w-full flex-shrink-0 position-relative ">
        <Image
          src="/assets/career.png"
          width={1980}
          height={1076}
          alt="banners"
          layout="responsive"
        />
        <div className="d-flex justify-content-center">
          <div className={`${styles.careerDiv} text-white text-center`}>
            <h1 className="fw-bold display-6 display-md-5 display-lg-4">Career</h1>
          </div>
        </div>
      </div>
      <Container fluid className='mt-3' style={{ paddingLeft: '30px', paddingRight: '30px', marginBottom:'150px' }}>
        <Row className="align-items-center justify-content-between my-4">
          {/* Left: Heading */}
          <Col xs="auto">
            <h2 className="fw-bold m-0" style={{ color: '#0056A8', fontSize: '40px', fontWeight: 700 }}>Join The Team</h2>
          </Col>

          {/* Right: Search + Filter */}
          <Col xs="auto" className="d-flex align-items-center gap-3">
            {/* Search Box */}
            <InputGroup className="rounded-pill overflow-hidden" style={{ border: '1px solid #048EFF', color:'#505050', fontSize:'14px', fontWeight:500 }}>
              <Form.Control
                type="text"
                placeholder="Search by role.."
                className="border-0 shadow-none ps-3"
                style={{ minWidth: '240px' }}
              />
              <Button variant="light" className="border-0 pe-3">
                <FaSearch style={{color:'#505050', fontSize:'20px', paddingBottom:'5px'}} />
              </Button>
            </InputGroup>


            {/* Filter Icon */}
            <span className=" d-flex align-items-center" style={{ fontSize:'16px', color:'#6C6C6C', fontWeight:500 }}>
              Filter <LuSlidersHorizontal className="text-black ms-2 fs-5" />
            </span>

          </Col>
        </Row>
        <Row className='g-3'>
          <Col sm={4}>
            <JobCard />
          </Col>
          <Col sm={4}>
            <JobCard />
          </Col>
          <Col sm={4}>
            <JobCard />
          </Col>
          <Col sm={4}>
            <JobCard />
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default Career