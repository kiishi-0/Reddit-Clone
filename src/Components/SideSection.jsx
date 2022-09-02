import React from 'react'
import styled from 'styled-components'
import up from '../images/up.svg'


const SideSectionContainer = styled.div`
    width: 35%;
    margin-top: 30px;
     
    @media(max-width: 880px){
        display: none;
    }
`
const TopNewsCommDiv = styled.div`
    width: 100%;
    min-height: 379px;
    background: #FFFFFF;
    padding-bottom: 20px;
`
const TopNewsHeader = styled.div`
    height: 120px;
    width: 100%;
    background: #707070;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    text-align: left;
    color: #FFFFFF;
    font-weight: 600;
    padding: 0 10px 10px;
` 
const CommunitiesList = styled.ol`
    width: 100%;
    display: flex;
    flex-direction: column;
    color: #000;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
    li{
        list-style: upper-roman;
        border-bottom: 1px solid #BDBDBD;
        display: flex;
        align-items: center;
        justify-content: flex-star;
        padding: 20px 20px;
        width: 100%;
        
        span{
            margin-right: 10px;
        }
    }
    li.last{
        border-bottom: none;
    }
`
const CommunityImage = styled.div`
    width: 25px;
    height: 25px;
    background: #707070;
    border-radius: 20px;
    margin-right: 10px;
`
const CommunityName = styled.a`
    color: #000000;
    text-decoration: none;
`
const CommunityLink = styled.a`
    color: #000000;
    text-decoration: none;
    width: 100%;
`
const GreenArrow = styled.div`
    width: 15px;
    margin-right: 10px;
`
const GreenArrowImage = styled.img`
    width: 100%;
    object-fit: contain;
`
const ViewAllButton = styled.a`
    border: none;
    text-decoration: none;
    background: #0487D9;
    width: 90%;
    padding: 5px 38%;
    font-weight: 600;
    border-radius: 20px;
    color: #FFFFFF;
`
const BottomButtonsDiv = styled.div`
    width: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content-flex-start;
    margin-top: 20px;
`
const BottomButton = styled.a`
    text-decoration: none;
    font-size: 14px;
    color: #0487D9;
    font-weight: 600;
    border: none;
    border-radius: 20px;
    margin-right: 10px;
    padding: 5px 10px;
    :hover{
        background: rgba(36,160,237,0.2);
    }
`
export default function SideSection() {
  return (
    <SideSectionContainer>
        <TopNewsCommDiv>
            <TopNewsHeader>
                <p>Top News Communities</p>
            </TopNewsHeader>
            <CommunitiesList>
                <CommunityLink href="#">
                    <li>
                        <span>1</span>
                        <GreenArrow>
                            <GreenArrowImage src={up} alt="green arrow" />
                        </GreenArrow>
                        <CommunityImage></CommunityImage>
                        <CommunityName href="#">r/worldnews</CommunityName>
                    </li>
                    <li>
                        <span>2</span>
                        <GreenArrow>
                            <GreenArrowImage src={up} alt="green arrow" />
                        </GreenArrow>
                        <CommunityImage></CommunityImage>
                        <CommunityName href="#">r/worldnews</CommunityName>
                    </li>
                    <li>
                        <span>3</span>
                        <GreenArrow>
                            <GreenArrowImage src={up} alt="green arrow" />
                        </GreenArrow>
                        <CommunityImage></CommunityImage>
                        <CommunityName href="#">r/worldnews</CommunityName>
                    </li>
                    <li className="last">
                        <span>4</span>
                        <GreenArrow>
                            <GreenArrowImage src={up} alt="green arrow" />
                        </GreenArrow>
                        <CommunityImage></CommunityImage>
                        <CommunityName href="#">r/worldnews</CommunityName>
                    </li>
                </CommunityLink>
                
            </CommunitiesList>
            <ViewAllButton href="#">View All</ViewAllButton>
            <BottomButtonsDiv>
                <BottomButton href="#">Top</BottomButton>
                <BottomButton href="#">Near You</BottomButton>
                <BottomButton href="#">News</BottomButton>
                <BottomButton href="#">Sports</BottomButton>
            </BottomButtonsDiv>
        </TopNewsCommDiv>
    </SideSectionContainer>
  )
}
