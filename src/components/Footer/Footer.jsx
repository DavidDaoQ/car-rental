import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "../../styles/footer.css";

const quickLinks = [
  { path: "/about", display: "Giới thiệu" },
  { path: "/#", display: "Chính sách bảo mật" },
  { path: "/cars", display: "Danh sách xe ô tô" },
  { path: "/blogs", display: "Blog" },
  { path: "/contact", display: "Liên hệ" },
];
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className="d-flex align-items-center gap-2">
                  <i className="ri-car-line"></i>
                  <span>
                    Thuê xe ô tô <br />
                    Dịch vụ
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              MIOTO là nền tảng chia sẻ ô tô, sứ mệnh của chúng tôi không chỉ
              dừng lại ở việc kết nối chủ xe và khách hàng một cách Nhanh chóng
              - An toàn - Tiện lợi, mà còn hướng đến việc truyền cảm hứng KHÁM
              PHÁ những điều mới lạ đến cộng đồng qua những chuyến đi trên nền
              tảng của chúng tôi.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Đường dẫn nhanh</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Trụ sở chính</h5>
              <p className="office__info">
                38 Ngõ 1,Phố Thiên Hiền,Nam Từ Liêm,Hà Nội
              </p>
              <p className="office__info">Số điện thoại : +084 963-002-708</p>
              <p className="office__info">Email : dangquangdao.99@gmail.com</p>
              <p className="office__info">Thời gian mở cửa : 10am - 7pm</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Bản tin</h5>
              <p className="section__description">
                Đăng ký bản tin của chúng tôi
              </p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}. Được phát
                triển bởi Đào Đăng Quang. Đã được đăng ký bản quyền.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
