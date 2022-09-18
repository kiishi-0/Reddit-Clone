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
  border-radius: 20px;
  :after{
    postion: absolute;
    width: 100%;
    content: '';

  }
  @media(max-width: 650px){
    width: 350px;
  }
`
const TrendImage = styled.img`
  width: 100%;
  object-fit: contain;
`

export default function Trend(props) {
  const data = props.data
  // console.log()
  console.log(data)
  console.log(data.preview)
  const imgSrc = data.url.includes('jpg') ? data.url : null 
  return (
    <TrendBox href={data.url} title={data.title}>
      <TrendImage src={data.url} />
    </TrendBox>
  )
}