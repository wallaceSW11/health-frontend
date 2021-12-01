import React from "react";
import styled from "styled-components";
import { Form } from "react-bootstrap";

export const InputLabel = ({ label, value, type, placeHolder, width, widthFixed, onChange }) => {
  return (
    <Group width={width} widthFixed={widthFixed}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>{label}</Form.Label>
        <Form.Control
          type={!type ? "text" : type}
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
        />
      </Form.Group>
    </Group>
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

const Group = styled.div`
  padding: 10px;
  ${(props => props.widthFixed ?
    `max-width: ${props.width}px;
     min-width: ${props.width}px;` :
       props.width ? `width: ${props.width}px;` : `width: 100%`)}
`;

const Check = styled.div`
  display: flex;
  width: 100%;
  height: 20px;

  label {
    padding-top: 5px;
  }
`;
