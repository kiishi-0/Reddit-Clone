import React from 'react';
import styled from 'styled-components';
import hot from '../images/hot_logo.svg'
import newIcon from '../images/new.svg'
import top from '../images/top.svg'
import more from '../images/more.svg'

const PostHeaderConatiner = styled.div`
  width: 100%;
  background: #FFFFFF;
  height: 49px;
  margin-top: 10px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
const Buttons = styled.div`
  display: flex;
  // width: 100px;
  height: 35px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  border-radius: 100px;
  padding: 0 10px;
  margin-right: 10px;
  background: #F3F7F9;
  :hover{
    background: #6c6e7028;
  }
`
const ButtonImageContainer = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 7px;
  &.more{
    margin-right: 0;
  }
  // background: red;
`
const ButtonImage = styled.img`
  width: 100%;
  object-fit: contain;
`
const ButtonText = styled.span`
  color: #0487D9;
`
const DropDown = styled(Buttons)`
  color: #0487D9;
`
const OtherLinks = styled(Buttons)`
  color: #878A8C;
  span{
    font-size: 16px;
    font-weight: 600;
  }
  
`
export default function PostSectionHeader() {
  return (
    <PostHeaderConatiner>
        <Buttons title='Hot' role='button'>
          <ButtonImageContainer>
            <ButtonImage src={hot}></ButtonImage>
          </ButtonImageContainer>
          <ButtonText>Hot</ButtonText>
        </Buttons>
        <DropDown>Everywhere</DropDown>
        <OtherLinks>
          <ButtonImageContainer>
            <ButtonImage src={newIcon}></ButtonImage>
          </ButtonImageContainer>
          <span>New</span>
        </OtherLinks>
        <OtherLinks>
          <ButtonImageContainer>
            <ButtonImage src={top}></ButtonImage>
          </ButtonImageContainer>
          <span>Top</span>
        </OtherLinks>
        <OtherLinks>
          <ButtonImageContainer className="more">
            <ButtonImage src={more}></ButtonImage>
          </ButtonImageContainer>
        </OtherLinks>
    </PostHeaderConatiner>
  )
}
