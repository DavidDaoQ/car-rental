import React from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";

import OurMembers from "../components/UI/OurMembers";

import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="Giới thiệu">
      <CommonSection title="Giới thiệu" />
      <AboutSection aboutClass="aboutPage" />
      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  chúng tôi cam kết cung cấp giải pháp đi xe an toàn
                </h2>
                <p className="section__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet voluptatum nesciunt corrupti modi, vel id ducimus
                  perspiciatis hic recusandae, et quidem corporis sit error
                  fugiat illo. Ab eligendi esse molestias.
                </p>

                <p className="section__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet voluptatum nesciunt corrupti modi, vel id ducimus
                  perspiciatis hic recusandae, et quidem corporis sit error
                  fugiat illo. Ab eligendi esse molestias.
                </p>

                <div className="d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">
                      Bạn có cần sụ trợ giúp?
                    </h6>
                    <h4>+084-963-002-708</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <BecomeDriverSection />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <h6 className="section__subtitle">Chuyên gia</h6>
              <h2 className="section__title">Thành viên của chúng tôi</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
