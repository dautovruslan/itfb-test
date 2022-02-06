import React from 'react'
import { HeaderContainer, ContentContainer } from './Header.styles'
import Logo from './images/logo.svg'
import { LoginGroup } from '../LoginGroup/LoginGroup'

export function Header() {
    return (
        <HeaderContainer>
            <ContentContainer>
                <Logo />
                <LoginGroup />
            </ContentContainer>
        </HeaderContainer>
    )
}
