import React, { Fragment, useState } from "react";

export const Toggle = ({ title, isOpen, setIsOpen, children }) => (
  <Fragment>
    <h1
      style={{ cursor: "pointer", userSelect: "none" }}
      onClick={() => setIsOpen(!isOpen)}
    >
      {title}
    </h1>
    {isOpen ? children : null}
  </Fragment>
);

export const useToggleState = (value = false) => {
  const [isOpen, setIsOpen] = useState(value);
  return {
    isOpen,
    setIsOpen
  };
};

export const UncontrolledToggle = props => {
  const toggleState = useToggleState(props.defaultIsOpen);

  return (
    <ControlledToggle
      {...toggleState}
      {...omit(["isOpen", "setIsOpen"], props)}
    />
  );
};

export default Toggle;
