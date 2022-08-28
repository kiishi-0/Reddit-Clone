import React from 'react'
import styled from 'styled-components'
import PostSectionHeader from './PostSectionHeader'
import Post from './Post'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { loadPosts } from '../features/posts'


const PostSectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    // padding: 0 10%;
`
const Title = styled.h3`
    font-weight: 600;
    font-size: 16px;
    color: #1A1A1B;
`

export default function PostSection() {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.value)
  return (
    <PostSectionContainer>
        <Title>Popular Posts</Title>
        <PostSectionHeader>
        </PostSectionHeader>
        <Post></Post>
    </PostSectionContainer>
  )
}
