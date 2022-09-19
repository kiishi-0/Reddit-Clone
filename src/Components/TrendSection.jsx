import React, {useState} from 'react';
import Trend from './Trend'
import styled from 'styled-components';
// import LoaderPost from './LoaderPost/';
import { useEffect } from 'react';
import TrendLoaders from './TrendLoaders';

const TrendSectionContainer = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  padding: 20px 0;
  
`
const TrendsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  overflow: hidden;
  height: 200px;
`
const Title = styled.h3`
  font-weight: 600;
  font-size: 16px;
  color: #1A1A1B;
`

export default function TrendSection() {
  const [arrayTrends, setArrayTrend] = useState([]);
  const FetchTrends = async (url) =>{
    const data = await fetch(url).then(data => {
      return data.json()
    }).then( response => response).catch(error =>{
      console.log(error)
    })

    return data;
    
  }
  const StoreTrends = async ()=>{
    const fetched = await FetchTrends('https://www.reddit.com/hot.json')
    const postTrend = fetched.data.children.slice(5, 9);
    setArrayTrend(postTrend)
    if(arrayTrends){
      return true
    }
    
  }
  useEffect( ()=>{
    StoreTrends()  
  }, []);
  return (
    <TrendSectionContainer>
      <Title>Trending Today</Title>
      <TrendsContainer>
        {/* <TrendLoaders></TrendLoaders> */}
        {arrayTrends.length ? arrayTrends.map( (data, key) => <Trend data={data.data} key={key}/>) : <TrendLoaders></TrendLoaders>}
      </TrendsContainer>
    </TrendSectionContainer>
  )
}
