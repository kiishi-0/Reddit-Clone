import React from 'react'
import styled from 'styled-components'
import arrow from '../images/arrow.svg'

const PostContainer = styled.a`
    width: 100%;
    min-height: 100px;
    margin-bottom: 30px;
    background: #FFFFFF;
    border: 1px solid #CCCCCC;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    text-decoration: none;
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
    width: 100%;
    text-align: left;
    padding: 10px;
    color: #000;
    text-align: left;
`
const PostMedia = styled.span`
  width: 100%;
  text-align: left;
  color: #000;
  padding: 10px;
  .post_image{
    object-fit: contain;
    width: 100%;
  }
` 
export default function Post(props) {
  const data = props.data;
  let ourString = data.selftext_html
  let convertSymboltoHTMLString = function (str) {
    var dom = document.createElement('p');
    dom.classList.add("innerText")
    dom.innerHTML = str;
    return dom.innerText || dom.textContent; 

 };
  const stringToHTML = function (str) {
    var dom = document.createElement('div');
    dom.innerHTML = str;
    return dom;

  };
 const str = convertSymboltoHTMLString(ourString);
 const selfText = stringToHTML(str);

const appendSelfText = (text) =>{
  const el = document.getElementById(data.id);
  if(el){
    let child = el.firstChild
    if(child === null)
    el.appendChild(text)
  }
}

const scoreReturner = (score) =>{
  let initScore = score.toString();

  let finalScore = initScore.length > 3 && initScore.length < 5 ? initScore[0] + "k" : initScore.length >= 5 ? initScore[0] + initScore[1] + "k" : initScore;
  return finalScore;
} 
const checkMedia = () =>{
  if(data.is_reddit_media_domain === true){
    return <img className='post_image' src={data.url} alt={data.title} />
  }else if(data.is_self === true){
    appendSelfText(selfText)
  }
}
  return (
    <PostContainer href={data.url}>
        <VotingDiv>
          <Vote>
            <VoteImage src={arrow} className="up"/>
          </Vote>
          <VoteNumber>{scoreReturner(data.score)}</VoteNumber>
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
              <span className='pText'>Posted By<span className='poster'><span href="#">u/{data.author}</span></span><span className='time'>13 hours</span> ago</span>  
            </PostHeaderTextDiv>            
            <JoinButton>Join</JoinButton>
          </PostHeader>
          <PostText>
            {data.title}
          </PostText>
          <PostMedia id={data.id} className="media">
            {checkMedia()}
          </PostMedia>
        </PostDataSection>
    </PostContainer>
  )
}
