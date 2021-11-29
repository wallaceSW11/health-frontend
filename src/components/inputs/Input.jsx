import React from "react";
import styled from "styled-components";
import { Form } from "react-bootstrap";

export const InputLabel = ({ label, value, type, placeHolder, width }) => {
  return (
    <Input width={width}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>{label}</Form.Label>
        <Form.Control
          type={!type ? "text" : type}
          placeholder={placeHolder}
          value={value ? value : ""}
        />
      </Form.Group>
    </Input>
  );
};

export const CheckBox = ({ title }) => {
  return (
    <Check>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label={title} />
      </Form.Group>
    </Check>
  );
};

const Input = styled.div`
  padding: 10px;
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};

  /* width: 50px; */
`;

const Check = styled.div`
  display: flex;
  width: 100%;
  height: 20px;

  label {
    padding-top: 5px;
  }
`;
