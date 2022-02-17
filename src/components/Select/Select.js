import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <OuterWrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalWrapper>
        <Label>{displayedValue}</Label>
        <IconWrapper style={{'--size': '24px'}}>
          <Icon id='chevron-down' size={24} strokeWidth={2} />
        </IconWrapper>
      </PresentationalWrapper>
    </OuterWrapper>
  );
};

const OuterWrapper = styled.div`
  position: relative;
  width: max-content;
`;

// Styled so it fills its container
const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;

  option {
    border: 1px solid hotpink;
  }
`;

const Label = styled.div`
  margin-right: 24px;
`;

const PresentationalWrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  padding: 12px 52px 12px 16px;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + &{
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 12px;
  bottom: 0;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;

export default Select;
