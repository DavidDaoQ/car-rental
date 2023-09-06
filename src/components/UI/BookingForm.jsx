import React from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";

const BookingForm = () => {
  const submitHandler = (event) => event.preventDefault();
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="Họ" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="Tên" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="number" placeholder="Số điện thoại" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="Từ địa chỉ" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="Đến địa chỉ" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select name="" id="">
          <option value="1 person">1 Người</option>
          <option value="2 person">2 Người</option>
          <option value="3 person">3 Người</option>
          <option value="4 person">4 Người</option>
          <option value="5 person">5+ Người</option>
        </select>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select name="" id="">
          <option value="1 luggage">1 Hành lý</option>
          <option value="2 luggage">2 Hành lý</option>
          <option value="3 luggage">3 Hành lý</option>
          <option value="4 luggage">4 Hành lý</option>
          <option value="5 luggage">5+ Hành lý</option>
        </select>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="date" placeholder="Ngày khởi hành" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="time" placeholder="Thời gian khởi hành" />
      </FormGroup>

      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Viết..."
        ></textarea>
      </FormGroup>
    </Form>
  );
};
export default BookingForm;
