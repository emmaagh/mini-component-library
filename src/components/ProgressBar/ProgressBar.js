/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const getSizeStyles = (size) => {
  switch (size) {
    case 'large': {
      return {
        height: '24px',
        borderRadius: '8px',
        padding: '4px',
      }
    }
    case 'small':
      return {
        height: '8px',
        borderRadius: '4px',
      }
    case 'medium':
    default:
      return {
        height: '12px',
        borderRadius: '4px',
      }
  }
};

const ProgressBar = ({ value, size }) => {
  return (
    <OuterWrapper {...getSizeStyles(size)}>
        <InnerWrapper>
          <Progress value={value} />
          <div
            role='progressbar'
            aria-valuemin='0'
            aria-valuemax='100'
            aria-valuenow={value}>
            <VisuallyHidden>{value}%</VisuallyHidden>
          </div>
        </InnerWrapper>
    </OuterWrapper>
  );
};

const OuterWrapper = styled.div`
  width: 370px;
  background-color: ${COLORS.transparentGray15};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding || '0px'};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const InnerWrapper = styled.div`
  height: 100%;
  border-radius: 4px;
  /* Stop blue progress bar from popping out of corners of wrapper */
  overflow: hidden;
`;

const Progress = styled.div`
  background-color: ${COLORS.primary};
  width: ${(props) => props.value}%;
  height: 100%;
`;

export default ProgressBar;
