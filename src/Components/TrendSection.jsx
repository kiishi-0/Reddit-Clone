import React from 'react';
import Trend from './Trend'
import styled from 'styled-components';

const TrendSectionContainer = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  padding: 20px 0;
  
`
const TrendsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  overflow: hidden;
  height: 200px;
`
const Title = styled.h3`
  font-weight: 600;
  font-size: 16px;
  color: #1A1A1B;
`
export default function TrendSection() {
  return (
    <TrendSectionContainer>
      <Title>Trending Today</Title>
      <TrendsContainer>
        <Trend className="first"></Trend>
        <Trend className="second"></Trend>
        <Trend className="third"></Trend>
        <Trend className="fourth"></Trend>
      </TrendsContainer>
    </TrendSectionContainer>
  )
}
