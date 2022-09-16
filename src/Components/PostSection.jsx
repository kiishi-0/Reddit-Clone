import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PostSectionHeader from './PostSectionHeader'
import Post from './Post'
// import { useSelector, useDispatch } from 'react-redux/es/exports'
// import { loadPosts } from '../features/posts'
import LoaderPost from './LoaderPost'
import SideSection from './SideSection'


const EntireSection = styled.section`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
`
const PostSectionContainer = styled.div`
  display: flex;
  width: 65%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right:30px;
  @media(max-width: 880px){
    width: 100%;
  }
`
const Title = styled.h3`
  font-weight: 600;
  font-size: 16px;
  color: #1A1A1B;
`

export default function PostSection() {
  const [arrayPosts, setArrayPost] = useState([]);
  const FetchPosts = async (url) =>{
    const data = await fetch(url).then(data => {
      return data.json()
    }).then( response => response).catch(error =>{
      console.log(error)
    })

    return data;
    
  }
  const StorePost = async ()=>{
    const fetched = await FetchPosts('https://www.reddit.com/r/AskReddit.json')
    const postArray = fetched.data.children;
    setArrayPost(postArray);
    if(postArray){
      return true
    }
  }
  useEffect( ()=>{
    StorePost()  
  }, []);

  return (
    <EntireSection>
      <PostSectionContainer>
          <Title>Popular Posts</Title>
          <PostSectionHeader>
          </PostSectionHeader>
          {arrayPosts.length > 0 ? arrayPosts.map((post, index) => <Post key={index} data={post.data}></Post>) :  <LoaderPost width="100%" height="250px"></LoaderPost>}
      </PostSectionContainer>
      <SideSection></SideSection>
    </EntireSection>
  )
}


