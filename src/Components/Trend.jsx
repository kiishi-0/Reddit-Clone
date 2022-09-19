import React from 'react'
import styled from 'styled-components'


const TrendBox = styled.a`
  overflow: hidden;
  width: 240px;
  position: relative;
  height: 180px;
  background-color: #cdcdcd;
  margin: 10px 0;
  margin-right: 20px;
  border-radius: 10px;
  &:after{
    z-index: 20;
    position: absolute;
    width: 100%;
    content: '';
    top: 0;
    left: 0;
    height: 100%;
    // background: red; 
    background-image: linear-gradient(180deg, rgba(0, 0, 0, .35), rgba(0, 0, 0, .85)); 
  }
  @media(max-width: 650px){
    width: 350px;
  }
`
const TrendImage = styled.img`
  width: 100%;
  object-fit: cover;
`
const InfoDiv = styled.div`
  z-index: 25;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  text-align: left;
  color: #FFF;
  flex-wrap: wrap;
  top: 0;
  height: 100%;
  left: 0;
  padding: 10px;
`
const Title = styled.h2`
  color: #FFF;
  font-weight: 500;
  font-size: 18px;
`
const TitleContent = styled.span`
  font-family: Noto Sans,Arial,sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 20px;
  max-height: 40px;
  
  margin: 0 0 5px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
const Author = styled.span`
  font-size: 12px;
`
export default function Trend(props) {
  const data = props.data
  console.log(data)
  const imgSrc = data.thumbnail ? data.thumbnail : data.url.includes('jpg') ? data.url : undefined;
  
  
 
  return (
    <TrendBox href={data.url} title={data.title} alt={data.title}>
      <TrendImage src={imgSrc} />
      <InfoDiv>
        <Title>{data.title.split(" ").slice(0, 5).join(" ") }</Title>
        <TitleContent>{data.title}</TitleContent>
        <Author>{data.subreddit_name_prefixed}</Author>
      </InfoDiv>
    </TrendBox>
  )
}