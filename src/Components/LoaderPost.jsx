import React from 'react'
import styled from 'styled-components'


const LoaderDiv3 = styled.div`
    height: 20px;
    width: 70%;
    border-radius: 5px;
    background: #e0e0e0;
    margin-bottom: 10px;
`
// const LoaderDiv2 = styled(LoaderDiv3)`
//     width: 60%;
// `
const LoaderDiv1 = styled(LoaderDiv3)`
    width: 100%;
    height: 150px;
`
const LoaderPostContainer = styled.div`
    width: 100%;
    height: 222px;
    background: #cdcdcd;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    justify-content: flex-start;
    padding: 20px 10px;
`
export default function LoaderPost(props) {
    
    
  return (
    <LoaderPostContainer>
        <LoaderDiv3></LoaderDiv3>
        <LoaderDiv1></LoaderDiv1>
        
    </LoaderPostContainer>
  )
}
