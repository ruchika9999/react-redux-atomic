import React from "react";
import styled, { css } from "styled-components";
import { palette } from "styled-theme";

const setWidth = ({ viewPortSizes }) =>
  viewPortSizes ? viewPortSizes.width + "px" : "100vw";
const setHeight = ({ viewPortSizes }) =>
  viewPortSizes ? viewPortSizes.height + "px" : "100vh";

const style = css`
  background-color: ${palette("primary", 0, true)};
  width: ${setWidth};
  height: ${setHeight};
`;

const Component = styled.div`
  ${style};
`;

const FullScreen = ({ children, viewPortSizes }) => {
  return <Component viewPortSizes={viewPortSizes}>{children}</Component>;
};

export { FullScreen };

FullScreen.defultProps = {
  viewPortSizes: 0
};
