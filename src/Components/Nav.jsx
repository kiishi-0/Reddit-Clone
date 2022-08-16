import React from 'react'
import styled from 'styled-components'
import logo from '../images/reddit-logo.svg'

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

export default function Nav() {
  return (
    <NavBar>
        <LogoContainer>
            <Logo src={logo}/>
        </LogoContainer>
    </NavBar>
  )
}
