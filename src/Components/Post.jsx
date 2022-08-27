import React from 'react'
import styled from 'styled-components'
import arrow from '../images/arrow.svg'

const PostContainer = styled.div`
    width: 520px;
    height: 350px;
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
    padding: 20px 0;
    width: 50px;
    height: 100%;
    background: #F6F7F9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justfiy-content: flex-start;
    // background: red;
`
const VoteNumber = styled.p`
    font-weight: 600;
    color: #000;
    margin: 10px 0;
`
const Vote = styled.button`
    width: 25px;
    cursor: pointer;
    // height: ;
    border: none;
    background: none;
    .up{
      transform: rotate(180deg);
      // margin: 0;
      // margin-bottom: 10px;
    }
`
const VoteImage = styled.img`
    width: 100%;
    object-fit: contain;
`
export default function Post() {
  return (
    <PostContainer>
        <VotingDiv>
          <Vote>
            <VoteImage src={arrow} className="up"/>
          </Vote>
          <VoteNumber>1.2K</VoteNumber>
          <Vote>
            <VoteImage src={arrow} />
          </Vote>
        </VotingDiv>
    </PostContainer>
  )
}
