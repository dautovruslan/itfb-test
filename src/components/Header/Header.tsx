import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderContainer, ContentContainer } from './Header.styles'
import Logo from './images/logo.svg'
import { LoginGroup } from '../LoginGroup/LoginGroup'

export function Header() {
    return (
        <HeaderContainer>
            <ContentContainer>
                <Link to="/">
                    <Logo />
                </Link>
                <LoginGroup />
            </ContentContainer>
        </HeaderContainer>
    )
}
