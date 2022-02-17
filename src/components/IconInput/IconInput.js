import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const sizes = {
  small: {
    underlineThickness: '1px',
    iconSize: '10px',
    fontSize: '14px',
    lineHeight: '16px',
    paddingInputLeft: '21px',
  },
  large: {
    underlineThickness: '2px',
    iconSize: '16px',
    fontSize: '18px',
    lineHeight: '21px',
    paddingInputLeft: '33px',
  },
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const {
    underlineThickness,
    iconSize,
    fontSize,
    lineHeight,
    paddingInputLeft,
  } = sizes[size];
  return (
    <Wrapper style={{
      '--underline-thickness': underlineThickness,
      '--width': width + 'px',
    }}>
      <IconWrapper style={{'--size': iconSize}}>
        <Icon id={icon} size={iconSize} />
      </IconWrapper>
      <Input placeholder={placeholder} style={{
        '--font-size': fontSize,
        '--line-height': lineHeight,
        '--padding-left': paddingInputLeft,
        '--width': width + 'px',
      }} />
      <VisuallyHidden>{placeholder}</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  border-bottom: var(--underline-thickness) solid ${COLORS.black};
  width: var(--width);
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  height: var(--size);
  pointer-events: none;
`;

const Input = styled.input`
  padding: 0;
  padding-left: var(--padding-left);
  width: var(--width);

  border: none;

  font-size: var(--font-size);
  line-height: var(--line-height);

  font-weight: bold;
  color: inherit;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: normal;
  }

  &:focus {
    outline-offset: 5px;
  }
`;

export default IconInput;
