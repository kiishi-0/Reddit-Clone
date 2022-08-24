import React from 'react'
import styled from 'styled-components'


const TrendBox = styled.a`
    width: 240px;
    // flex: 1;
    height: 180px;
    background-color: #cdcdcd;
    margin: 10px 0;
    margin-right: 20px;
    border-radius: 20px;
    @media(max-width: 650px){
      width: 350px;
    }
`

export default function Trend() {
  return (
    <TrendBox href='#'>

    </TrendBox>
  )
}