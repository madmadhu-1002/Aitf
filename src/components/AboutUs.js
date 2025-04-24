"use client"

import React from 'react'
import Image from 'next/image';
import { FaRegLightbulb, FaHandsHelping, FaUsers, FaTwitter, FaLinkedin, FaFacebook, FaDribbble } from 'react-icons/fa';
import styles from '@/styles/AboutUs.module.css'
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import VisionMissionValues from "@/components/VisionMissionValues";
import ProfileCard from '@/components/ProfileCard';

const philosophyPoints = [
  {
    title: 'Our Vision',
    description: 'We foster a culture that embraces creativity and forward-thinking solutions.',
    icon: <FaRegLightbulb className="text-3xl text-blue-600" />,
  },
  {
    title: 'Our Mission',
    description: 'We believe in the power of teamwork and strategic partnerships.',
    icon: <FaHandsHelping className="text-3xl text-green-600" />,
  },
  {
    title: 'Our Values',
    description: 'Our employees and clients are at the heart of everything we do.',
    icon: <FaUsers className="text-3xl text-purple-600" />,
  },
];

const teamMembers = Array(6).fill({
  name: 'Sarah Chen',
  title: 'Senior UX Designer',
  description: '10+ years of experience in creating user-centered digital experiences for global brands.',
  image: '/assets/image 28.png', // Replace with your actual image path
});

const AboutUs = () => {
  return (
    <>
      <div className="min-w-full flex-shrink-0 position-relative ">
        <Image
          src="/assets/about.png"
          width={1467}
          height={614}
          alt="banners"
          layout="responsive"
        />
        <div className={`${styles.aboutDiv} text-white text-center`}>
          <h1 className="fw-bold display-6 display-md-5 display-lg-4">Leading the Way in <span className='fs-6 text-primary'>vehicle modifications</span></h1>
          <h1 className="fw-bold display-6 display-md-5 display-lg-4"><span className='fs-6 text-primary'>and </span> Specialized Conversions</h1>
        </div>
        <div className="d-flex justify-content-center">
          <div className={`${styles.aboutButton} text-white text-center`}>
            <Button className={`${styles.btn}`}>Get In Touch</Button>
          </div>
        </div>

      </div>
      {/* about */}
      <Container fluid className={styles.ambulance}>
        <Row className='mt-5'>

          <Col sm={6} className="d-flex flex-column justify-content-end">
            <div >
              <Image style={{ position: 'relative', bottom: "45px" }}
                src="/assets/miltary1.png"
                width={610}
                height={376}
                alt="ambulance"
              />
            </div>
          </Col>
          <Col sm={6}>
            <div className={`${styles.carouselDiv} ms-2 text-dark`} >
              <h2 style={{ fontWeight: 700, fontSize: '48px' }} className="fw-bold display-6 display-md-5 display-lg-4">
                About <span style={{ color: '#0071FF' }}>AITF</span>
              </h2>
              <p className="fs-6 fs-md-5 fs-lg-4">Al Ihassan Trading FZCO. (AITF) is a one stop solution for all your automotive needs. We offer an exclusive tailored made solution to match our customer’s requirement. Equipped with vast experience and professional expertise, our sales and service staff are ready to tailor-make solutions that meet individual requirement and undertake any Automobile related projects.</p>
              <p className="fs-6 fs-md-5 fs-lg-4">We meticulously design our extensive range of products and services to enhance your vehicle's performance and potential, efficiently addressing all aftermarket needs.</p>
              <Button className={`${styles.btn1}`}>Contact Us</Button>
            </div>
          </Col>
        </Row>
      </Container>
      {/* history */}
      <Container fluid className={styles.ambulance}>
        <Row>
          <Col sm={6}>
            <div className={`${styles.carouselDiv} ms-2 text-dark`} >
              <h2 className="display-6 display-md-5 display-lg-4" style={{ fontSize: '48px', fontWeight: '700' }}>History Of AITF</h2>
              <p className="fs-6 fs-md-5 fs-lg-4">Al Ihassan Trading FZCO. (AITF) is a one stop solution for all your automotive needs. We offer an exclusive tailored made solution to match our customer’s requirement. Equipped with vast experience and professional expertise, our sales and service staff are ready to tailor-make solutions that meet individual requirement and undertake any Automobile related projects.</p>
              <p className='fs-6 fs-md-5 fs-lg-4'>Our industry experience spans over 65 years. Our expansive footprint and robust network are our greatest strengths.</p>
              <p className='fs-6 fs-md-5 fs-lg-4'>Guided by a corporate vision to be a globally recognized business group that creates lifelong customer relationships, Bahwan International Group boasts an impressive portfolio of brands, including Suzuki, Changan, Foton, BAIC, Iveco, CASE, Terex, Wacker Neuson, and Topcon, among many others.</p>
              <div className="d-flex flex-wrap gap-2 mt-3">
                <Button className={`${styles.btn1}`}>Read More</Button>
                <Button className={`${styles.btn2}`}>Contact Us</Button>
              </div>
            </div>
          </Col>
          <Col sm={6} className="d-flex flex-column justify-content-end">
            <div>
              <Image
                src="/assets/miltary2.png"
                width={610}
                height={376}
                alt="ambulance"
              />
            </div>
          </Col>
        </Row>
      </Container>
      {/* case study */}
      <h2 className=" display-6 display-md-5 display-lg-4 mt-5" style={{ marginLeft: '20px', fontSize: '48px', fontWeight: '600' }}>Case Study</h2>
      <Container fluid className={`bg-black text-white  ${styles.ambulance}`}>
        <Row >
          <Col sm={5} className="d-flex flex-column justify-content-end">
            <div>
              <Image className='pt-2'
                src="/assets/miltary3.png"
                width={510}
                height={376}
                alt="ambulance"
                layout='responsive'
              />
            </div>
          </Col>
          <Col sm={7}>
            <div className={`${styles.carouselDiv} ms-2 mt-3`} >
              <h2 className="fw-bold display-6 display-md-5 display-lg-4">Nissan Y62</h2>
              <p className="fs-6 fs-md-5 fs-lg-4" style={{ marginRight: '20px', fontSize: '24px !important', fontWeight: '400' }} >"I chose AWeber because I simply could not find any other provider that offered all the tools I needed under one platform, such autoresponders, self-hosted sign up forms, and integration with third-party apps. I also love AWeber's pay-as-you-grow billing scale, which enables companies with smaller mailing lists to have full access to all the robust features AWeber offers without being up-charged."</p>
              <div className="d-flex flex-wrap gap-2 mt-3">
                <Button className={`${styles.btn2}`}>Read More</Button>
                <Button className={`${styles.btn3}`}>Know More</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* philosophy */}
      <section className="bg-white">
        <Container className="py-5 text-center">
          <h2 className="fw-semibold" style={{ fontSize: '40px', fontWeight: '600' }}>Our Philosophy</h2>
          <div className="min-h-screen bg-gray-50 p-4">
            <VisionMissionValues />
          </div>
        </Container>
      </section>
      {/* our team */}
      <section className="bg-light" style={{marginBottom:'150px'}}>
        <Container>
          <h2 className="text-center h3 fw-semibold" style={{fontSize:'40px', fontWeight:'600'}}>Team of Experts</h2>
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProfileCard />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default AboutUs