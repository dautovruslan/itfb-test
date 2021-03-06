import React, { useState } from 'react'
import { Button } from '@mui/material'
import { createPortal } from 'react-dom'
import { Container, NameContainer } from './LoginGroup.styles'
import { useStore } from '../../usersStore'
import { LoginForm } from '../LoginForm/LoginForm'

export function LoginGroup() {
    const [isModalShown, setModalShown] = useState(false)
    const { activeUser, setActiveUser } = useStore()
    const handleLogout = () => setActiveUser(null)

    return (
        <>
            <Container>
                {activeUser && (
                    <>
                        <NameContainer>{`${activeUser?.name.toUpperCase() ?? ''} ${
                            activeUser?.lastName.toUpperCase() ?? ''
                        }`}</NameContainer>
                        <Button onClick={handleLogout} size="small" style={{ paddingTop: '6px' }}>
                            Выйти
                        </Button>
                    </>
                )}
                {!activeUser && (
                    <Button onClick={() => setModalShown(true)} size="small" style={{ paddingTop: '6px' }}>
                        Войти
                    </Button>
                )}
            </Container>
            {isModalShown &&
                createPortal(
                    <LoginForm isShown={isModalShown} onClose={() => setModalShown(false)} />,
                    document.getElementById('root')!,
                )}
        </>
    )
}
