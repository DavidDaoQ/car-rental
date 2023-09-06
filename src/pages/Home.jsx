import React from "react";
import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import FindCarform from "../components/UI/FindCarForm";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import Testimonial from "../components/UI/Testimonial";
import BlogList from "../components/UI/BlogList";

const Home = () => {
  return (
    <Helmet title="Trang chú">
      {/**hero section */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />
        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Tìm chiếc xe tốt nhất của bạn ở đây</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindCarform />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/** about section*/}
      <AboutSection />
      {/**services section */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Xem chúng tôi</h6>
              <h2 className="section__title">Dịch vụ phổ biến</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
      {/**car ofer section */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Trải nghiệm cùng</h6>
              <h2 className="section__title">Sản phẩm mới!</h2>
            </Col>
            {carData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
      {/**become a driver section */}
      <BecomeDriverSection />

      {/**Testimonial section */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">
                Khách hàng của chúng tôi nói gì?
              </h6>
              <h2 className="section__title">Ý kiến xác nhận</h2>
              <Testimonial />
            </Col>
          </Row>
        </Container>
      </section>
      {/**blog section */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Khám phá Blog của chúng tôi</h6>
              <h2 className="section__title">Blog gần đây</h2>
            </Col>

            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
