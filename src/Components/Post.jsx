import React from 'react'
import styled from 'styled-components'
import arrow from '../images/arrow.svg'

const PostContainer = styled.div`
    width: 520px;
    min-height: 350px;
    background: #FFFFFF;
    border: 1px solid #CCCCCC;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media(max-width: 768px){
        width: 100%;
    }
`
const VotingDiv = styled.div`
    width: 40px;
    height: 100%;
    // background: #898989;
    background: red;
`

export default function Post() {
  return (
    <PostContainer>
        <VotingDiv>

        </VotingDiv>
    </PostContainer>
  )
}
