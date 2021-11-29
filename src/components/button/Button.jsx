import React from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const ButtonPrimary = ({ text }) => {
  return <Button variant="primary">{text}</Button>;
};

export const ButtonSecondary = ({ text }) => {
  return <Button variant="secondary">{text}</Button>;
};

export const LinkToPrimary = ({text, path}) => {
  return (
    <LinkContainer to={path}>
      <Button>{text}</Button>
    </LinkContainer>
  );
};
