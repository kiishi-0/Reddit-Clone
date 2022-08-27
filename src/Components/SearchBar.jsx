import React from 'react'
import styled from 'styled-components'
// import search from `../images/search.svg`
import search from '../images/search.svg'

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
    padding: 0 10px;
    height: 30px;
    border: 1px solid #EDEFF1;
`
const SearchInput = styled.input`
    width: 90%;
    height: 100%;
    border: 0;
    background: transparent;
    padding: 2px 0;
    &:focus{
        outline: none;
        // border: 1px solid #0487D9;
    }
`
const SearchImageLabel = styled.label`
    width: 10%;
    margin-right: center;
    span.searchImage{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }
`
const SearchImage = styled.img`
    width: 20px;
    object-fit: contain;
`

export default function SearchBar() {
  return (
    <SearchBarContainer>
        <SearchBarForm>
            <SearchImageLabel for="search">
                <span className='searchImage'>
                    <SearchImage src={search} />
                </span>
            </SearchImageLabel>
            <SearchInput id="search" type="text" placeholder='Search Reddit'/>
        </SearchBarForm>
    </SearchBarContainer>
  )
}
