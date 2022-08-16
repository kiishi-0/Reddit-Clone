import React from 'react';
import Trend from './Trend'
import styled from 'styled-components';

const TrendSectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`
const TrendsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
export default function TrendSection() {
  return (
    <TrendSectionContainer>
      <TrendsContainer>
        <Trend></Trend>
        <Trend></Trend>
        <Trend></Trend>
        <Trend></Trend>
      </TrendsContainer>
    </TrendSectionContainer>
  )
}
