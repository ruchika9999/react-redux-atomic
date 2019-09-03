import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { font, palette } from 'styled-theme';

const fontSize = ({ level }) => `${0.75 + 1 * (1.6 / level)}rem`;
const color = ({ fontColor, grayScale }) => {
  return fontColor
    ? fontColor
    : palette('grayscale', grayScale ? grayScale : 1, true);
};
const weight = ({ fontWeight }) =>
  palette('weight', fontWeight ? fontWeight : 1, true);

const styles = css`
  font-family: ${font('primary')};
  font-weight: ${weight};
  font-size: ${fontSize};
  margin: 0;
  color: ${color};
`;

const Heading = styled(
  ({ level, children, fontColor, fontWeight, grayScale, ...props }) =>
    React.createElement(`h${level}`, props, children)
)`
  ${styles};
`;

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node,
  fontColor: PropTypes.string,
  fontWeight: PropTypes.number,
  grayScale: PropTypes.string,
};

Heading.defaultProps = {
  level: 1,
  palette: 'grayscale',
  fontWeight: 1,
};

export { Heading };
