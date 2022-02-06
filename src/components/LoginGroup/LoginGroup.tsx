import React from 'react'
import { Button } from '@mui/material'
import { Container, NameContainer } from './LoginGroup.styles'

export function LoginGroup() {
    return (
        <Container>
            <NameContainer>JOHN DOE</NameContainer>
            <Button size="small" style={{ paddingTop: '6px' }}>
                Выйти
            </Button>
        </Container>
    )
}
