// "use client";

// import Image from "next/image";
// import styles from '@/styles/AboutUs.module.css';
// import { Container } from "react-bootstrap";

// const VisionMissionValues = () => {
//   return (
//     <Container className="">
//       <div className={styles.grid}>
//         {/* Vision */}
//         <div className={styles.card}>
//           <div className={styles.headerRow}>
//             <div className={styles.iconCircle}>
//               <Image src="/assets/vision.png" width={40} height={40} alt="Vision Icon" />
//             </div>
//             <h3>Our Vision</h3>
//           </div>
//           <p>A Globally Recognized business group creating customers for life</p>
//         </div>

//         {/* Mission */}
//         <div className={styles.card}>
//           <div className={styles.headerRow}>
//             <div className={styles.iconCircle}>
//               <Image src="/assets/mission.png" width={40} height={40} alt="Mission Icon" />
//             </div>
//             <h3>Our Mission</h3>
//           </div>
//           <p>
//             We are committed to diversity and innovatively delivering world-class products
//             and services through empowered employees and creating value for our stakeholders.
//           </p>
//         </div>

//         {/* Values */}
//         <div className={styles.card}>
//           <div className={styles.headerRow}>
//             <div className={styles.iconCircle}>
//               <Image src="/assets/values.png" width={40} height={40} alt="Values Icon" />
//             </div>
//             <h3>Our Values</h3>
//           </div>
//           <p>Integrity, Ownership, Passion and Excellence</p>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default VisionMissionValues;

"use client";

import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from '@/styles/AboutUs.module.css';

const VisionMissionValues = () => {
  return (
    <Container className="py-4">
      <Row className="g-4 justify-content-center">
        {/* Vision */}
        <Col xs={12} md={6} lg={4}>
          <div className={styles.card}>
            <div className={styles.headerRow}>
              <div className={styles.iconCircle}>
                <Image src="/assets/vision.png" width={40} height={40} alt="Vision Icon" />
              </div>
              <h3>Our Vision</h3>
            </div>
            <p>A Globally Recognized business group creating customers for life</p>
          </div>
        </Col>

        {/* Mission */}
        <Col xs={12} md={6} lg={4}>
          <div className={styles.card}>
            <div className={styles.headerRow}>
              <div className={styles.iconCircle}>
                <Image src="/assets/mission.png" width={40} height={40} alt="Mission Icon" />
              </div>
              <h3>Our Mission</h3>
            </div>
            <p>
              We are committed to diversity and innovatively delivering world-class products
              and services through empowered employees and creating value for our stakeholders.
            </p>
          </div>
        </Col>

        {/* Values */}
        <Col xs={12} md={6} lg={4}>
          <div className={styles.card}>
            <div className={styles.headerRow}>
              <div className={styles.iconCircle}>
                <Image src="/assets/values.png" width={40} height={40} alt="Values Icon" />
              </div>
              <h3>Our Values</h3>
            </div>
            <p>Integrity, Ownership, Passion and Excellence</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default VisionMissionValues;

