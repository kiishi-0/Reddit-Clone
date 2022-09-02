import React, { useEffect } from 'react'
import styled from 'styled-components'
import PostSectionHeader from './PostSectionHeader'
import Post from './Post'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { loadPosts } from '../features/posts'
import LoaderPost from './LoaderPost'
import SideSection from './SideSection'
// import { motion } from 'framer-motion'

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
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.value)
  const FetchPosts = async (url) =>{

    const endpoint =  new URL(url)
    const response = await fetch(endpoint);
    if(response.status === 404){
      console.log("Error")
      return;
    }
    const data = await response.json();
    console.log(data)
  }
  useEffect(()=>{
    FetchPosts('https://www.reddit.com/r/posts.json')
  })
  return (
    <EntireSection>
      <PostSectionContainer>
          <Title>Popular Posts</Title>
          <PostSectionHeader>
          </PostSectionHeader>
          {posts.length === 0 ? <LoaderPost width="100%" height="250px"></LoaderPost> : posts.map(post => <Post></Post>)}
      </PostSectionContainer>
      <SideSection></SideSection>
    </EntireSection>
  )
}


