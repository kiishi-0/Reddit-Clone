import React from 'react'
import styled from 'styled-components'
import logo from '../images/reddit-logo.svg'
import SearchBar from './SearchBar'

const NavBar = styled.nav`
    width:100%;
    height: 49px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 20px;

`
const LogoContainer = styled.div`
    width: 32px;
    height: 32px;
`
const Logo = styled.img`
    width: 100%;
    object-fit: contain;
`
const LoginButton = styled.a`
    height: 30px;
    width: 120px;
    border: 1px solid #0487D9;
    display: flex;
    align-items: center;
    justify-content: center;
    // padding: 0 0 2px;
    border-radius: 100px;
    margin: 0 10px;
    color: #0487D9;
    font-weight: 600;
    :hover{
        background: rgba(0,121,211,0.05);
    }
`
const SignUpButton = styled(LoginButton)`
    background: #0487D9;
    color: #FFFFFF;
    :hover{
        background: #0094f0;
        border-color: #0094f0;
    }
`
export default function Nav() {
  return (
    <NavBar>
        <LogoContainer>
            <Logo src={logo}/>
        </LogoContainer>
        <SearchBar></SearchBar>
        <LoginButton>Log In</LoginButton>
        <SignUpButton>Sign Up</SignUpButton>
    </NavBar>
  )
}
