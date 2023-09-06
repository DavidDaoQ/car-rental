import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";

const CarListing = () => {
  return (
    <Helmet title="Danh sách xe">
      <CommonSection title="Danh sách xe" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="d-flex align-items-center gap-3 mb-5">
                <span className="d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i>Sắp xếp theo
                </span>

                <select>
                  <option>Tùy chọn...</option>
                  <option value="low">Thấp đến cao</option>
                  <option value="high">Cao xuống thấp</option>
                </select>
              </div>
            </Col>
            {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
