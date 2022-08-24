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
  cursor: pointer;
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
  position: relative; 
  span{
    font-size: 16px;
    font-weight: 600;
  }
  
`
const SelectOptionDiv = styled.div`
  position: absolute; 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 100%;
  display:none;
  box-shadow: 0 2px 4px 0 rgba(28,28,28,0.2);
  border: 1px solid #EDEFF1;
  border-radius: 5px;
`
const SelectOption = styled.div`
  padding: 15px 10px;
  background: #FFFFFF;
`

export default function PostSectionHeader() {
  const displayOptions = () =>{
    const more = document.getElementById("more_button")
    const moreDisplay = more.style.display
    moreDisplay === "flex" ? more.style.display = 'none' : more.style.display = 'flex';
    
  }
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
        <OtherLinks onClick={displayOptions}>
          <ButtonImageContainer className="more">
            <ButtonImage src={more}></ButtonImage>
          </ButtonImageContainer>
          <SelectOptionDiv id='more_button'>
            <SelectOption>Rising</SelectOption>
          </SelectOptionDiv>
        </OtherLinks>
    </PostHeaderConatiner>
  )
}
