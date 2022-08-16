import React from 'react'
import styled from 'styled-components'

const SearchBarContainer = styled.div`
    width: 60%;
    margin: 0 20px;
`
const SearchBarForm = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: #F6F7F9;
    height: 30px;
    border: 1px solid #EDEFF1;
`
const SearchInput = styled.input`
    width: 80%;
    height: 100%;
    border: 0;
    background: transparent;
    padding: 2px 0;
    &:focus{
        border: none;
        // border: 1px solid #0487D9;
    }
`

export default function SearchBar() {
  return (
    <SearchBarContainer>
        <SearchBarForm>
            <SearchInput type="text" placeholder='Search Reddit'/>
        </SearchBarForm>
    </SearchBarContainer>
  )
}
