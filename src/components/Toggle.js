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

export const useToggleState = initialIsOpen => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  return { isOpen, setIsOpen };
};

export default Toggle;
