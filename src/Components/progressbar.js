import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProgressBarWrapper = styled.div`
  position: relative;
  width: 68px;
  height: 66px;
  border-radius: 50%;
  background: radial-gradient(closest-side, white 79%, transparent 80% 100%), var(--conic-gradient, conic-gradient(#409d44 0%, #b7d3b9 0% 100%));
`;

const ProgressBarCircle = styled.div`
  position: absolute;
  width: 68px;
  height: 66px;
  border-radius: 50%;
  background: radial-gradient(closest-side, white 79%, transparent 80% 100%), var(--conic-gradient, conic-gradient(#409d44 0%, #b7d3b9 0% 100%));
  transition: background 1s ease-out;
`;

const PercentageText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  font-weight: bold;
`;

const ProgressBar = ({ percentage }) => {
  const circleRef = useRef(null);

  useEffect(() => {
    let color;
    if (percentage <= 33) {
      color = `conic-gradient(red ${percentage}%, #d8dadb  0% 100%)`;
    } else if (percentage <= 75) {
      color = `conic-gradient(lightgreen ${percentage}%, #d8dadb  0% 100%)`;
    } else {
      color = `conic-gradient(darkgreen ${percentage}%, #d8dadb  0% 100%)`;
    }

    if (circleRef.current) {
      circleRef.current.style.setProperty('--conic-gradient', color);
    }
  }, [percentage]);

  return (
    <ProgressContainer>
      <ProgressBarWrapper>
        <ProgressBarCircle ref={circleRef} />
        <PercentageText>{percentage}%</PercentageText>
      </ProgressBarWrapper>
    </ProgressContainer>
  );
};

export default ProgressBar;
