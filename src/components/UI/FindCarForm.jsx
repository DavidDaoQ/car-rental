import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarform = () => {
  return (
    <Form className="form">
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Gửi địa chỉ" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Đến địa chỉ" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Ngày hành trình" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Ngày hành trình"
            required
          />
        </FormGroup>

        <FormGroup className="select__group">
          <select>
            <option value="ac">AC Car</option>
            <option value="non-ac">Non AC Car</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Tìm xe</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarform;
