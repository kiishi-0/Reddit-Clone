import React from 'react'
import styled from 'styled-components'




export default function LoaderPost(props) {
    const LoaderPostContainer = styled.div`
        width: ${props.width};
        height: ${props.height};
        background: #cdcdcd;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 20px 10px;
    `
    const LoaderDiv3 = styled.div`
        height: 20px;
        width: 90%;
        border-radius: 5px;
        background: #e0e0e0;
        margin-bottom: 10px;
    `
    const LoaderDiv2 = styled(LoaderDiv3)`
        width: 60%;
    `
    const LoaderDiv1 = styled(LoaderDiv3)`
        width: 30%;
    `
  return (
    <LoaderPostContainer>
        <LoaderDiv3></LoaderDiv3>
        <LoaderDiv2></LoaderDiv2>
        <LoaderDiv3></LoaderDiv3>
        <LoaderDiv1></LoaderDiv1>
    </LoaderPostContainer>
  )
}
