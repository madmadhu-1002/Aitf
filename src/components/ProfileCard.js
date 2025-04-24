import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";

function SingleCard() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 font-sans mb-4">
      {/* Top Image */}
      <div className="w-100 position-relative" style={{ height: "250px" }}>
        <Image
          src="/assets/image28.png"
          alt="Sarah Chen"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Middle Section */}
      <div className="border-top px-4 pt-3 ">
        <div className="d-flex align-items-center gap-2">
          <span className="fw-bold text-dark" style={{fontSize:'20px', fontWeight:'600'}}>Sarah Chen</span>
          <span className="text-muted small" style={{fontSize:'16px', fontWeight:'500', marginLeft:'10px'}}>Senior UX Designer</span>
        </div>
      </div>
       <hr></hr>
      {/* Bio */}
      <div className="px-4 pb-3">
        <p className="text-muted small mb-2" style={{fontSize:'16px', fontWeight:'400'}}>
          10+ years of experience in creating user-centered digital experiences
          for global brands
        </p>
      </div>

      {/* Social Icons */}
      <div className="px-4 pb-4 d-flex gap-1 fs-5" style={{color:'#0056A8'}}>
        <FaInstagram />
        <FaFacebookF />
        <FaYoutube />
        <FaXTwitter />
        <FaTiktok />
      </div>
    </div>
  );
}

export default function ProfileCard() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <SingleCard />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <SingleCard />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <SingleCard />
        </Col>
      </Row>
    </Container>
  );
}
