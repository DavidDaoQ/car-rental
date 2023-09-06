import React from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Link } from "react-router-dom";
import "../styles/contact.css";

const socialLinks = [
  { url: "#", icon: "ri-facebook-line" },
  { url: "#", icon: "ri-instagram-line" },
  { url: "#", icon: "ri-linkedin-line" },
  { url: "#", icon: "ri-twitter-line" },
];

const Contact = () => {
  return (
    <Helmet title="Liên hệ">
      <CommonSection title="Liên hệ" />

      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold">Liên lạc</h6>

              <Form>
                <FormGroup className="contact__form">
                  <Input placeholder="Tên của bạn" type="text" />
                </FormGroup>

                <FormGroup className="contact__form">
                  <Input placeholder="Email" type="email" />
                </FormGroup>

                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    className="textarea"
                    placeholder="Tin nhắn..."
                  ></textarea>
                </FormGroup>

                <button className="btn contact__btn" type="submit">
                  Gửi tin nhắn
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Thông tin liên hệ</h6>

                <p className="section__description">
                  38 Ngõ 1, phố Thiên Hiền, Đình Thôn, Nam Từ Liêm, Hà Nội.
                </p>

                <div className="d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Số điện thoại : </h6>
                  <p className="section__description mb-0">+084-963-002-708</p>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Email : </h6>
                  <p className="section__description mb-0">
                    dangquangdao.99@gmail.com
                  </p>
                </div>
                <h6 className="fw-bold mt-4">Theo dõi chúng tôi</h6>

                <div className="d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i class={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
