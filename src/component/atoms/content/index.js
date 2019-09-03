import React from "react";
import styled, { css } from "styled-components";

const style = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align : center;
`;

const Component = styled.div`
  ${style};
`;

const Content = ({ children }) => {
  return <Component>{children}</Component>;
};

export { Content };
