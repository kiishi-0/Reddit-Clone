import React from 'react'
import styled from 'styled-components'
import arrow from '../images/arrow.svg'

const PostContainer = styled.div`
    width: 60%;
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
const PostDataSection = styled.div`
    padding: 8px 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`
const PostHeader = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 25px;
    justify-content: space-between;
    padding: 0 10px;
    font-size: 12px;
    span{
      margin-left: 5px;
      color: #787C7E;
      a{
        color: #787C7E;
        text-decoration: none;
        :hover{
          text-decoration: underline;
        }
      }
    }
`
const PostHeaderTextDiv = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;
`
const ProfilePicDiv = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 20px;
    overflow: hidden;
`
const ProfilePic = styled.div`
    background: #ccc;
    width: 100%;
    height: 100%;
`
const CommunityName = styled.p`
    font-weight: 600;
    color: #000;
    margin-left: 5px;
`
const JoinButton = styled.button`
    // width: 120px;
    border: none;
    padding: 2px 15px ;
    color: #FFF;
    // height: 15px;
    background: #0079D3;
    border-radius: 20px;
    margin-left: 10px;
    cursor: pointer;
`
const PostText = styled.p`
    font-weight: 600;
    font-size: 18px;
    color: #000;
    text-align: left;
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
        <PostDataSection>
          <PostHeader>
              <PostHeaderTextDiv>
              <ProfilePicDiv>
                <ProfilePic  />
              </ProfilePicDiv>
              <CommunityName>r/AskReddit</CommunityName>
              <span className='dot'>•</span>
              <span className='pText'>Posted By<span className='poster'><a href="#">u/404person_not_found</a></span><span className='time'>13 hours</span> ago</span>  
            </PostHeaderTextDiv>            
            <JoinButton>Join</JoinButton>
          </PostHeader>
          <PostText>
            Are you a software engineer 
            looking for higher-paying tech 
            jobs? To connect worldwide and 
            improve your skills? You can find 
            all this on startup oi - the first 
            complete global tech community. 👉 
            Explore with us today!
          </PostText>
        </PostDataSection>
    </PostContainer>
  )
}
