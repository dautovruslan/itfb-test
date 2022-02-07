import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'
import { Wrapper, Title, InputWrapper } from './AuthForm.styles'
import { Props } from './AuthForm.types'

export const AuthForm: React.FC<Props> = ({ handleRegister }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {}
    return (
        <Wrapper>
            <Title>Вход для пользователей</Title>
            <InputWrapper>
                <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    helperText="Введите email, который вы указали при регистрации"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </InputWrapper>
            <InputWrapper>
                <TextField
                    label="Пароль"
                    type="password"
                    fullWidth
                    helperText="Введите ваш пароль"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </InputWrapper>
            <Button
                onClick={handleLogin}
                size="large"
                variant="contained"
                style={{ marginBottom: '16px', width: '350px' }}
            >
                Войти
            </Button>
            <Button onClick={handleRegister} size="large" style={{ width: '350px' }}>
                Создать новый аккаунт
            </Button>
        </Wrapper>
    )
}
