import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'
import { Wrapper, Title, InputWrapper } from './AuthForm.styles'
import { Props } from './AuthForm.types'
import { useStore } from '../../../usersStore'

export const AuthForm: React.FC<Props> = ({ handleRegister, closeModal }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userError, setUserError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const { userList, setActiveUser } = useStore()

    const handleLogin = () => {
        if (!(email in userList)) {
            setUserError(true)
            return
        }
        setUserError(false)
        if (userList[email].password !== password) {
            setPasswordError(true)
            return
        }
        setActiveUser(userList[email])
        closeModal()
    }
    return (
        <Wrapper>
            <Title>Вход для пользователей</Title>
            <InputWrapper>
                <TextField
                    error={userError}
                    label="Email"
                    type="email"
                    fullWidth
                    helperText={
                        userError
                            ? 'Пользователя с таким email не существует'
                            : 'Введите email, который вы указали при регистрации'
                    }
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </InputWrapper>
            <InputWrapper>
                <TextField
                    error={passwordError}
                    label="Пароль"
                    type="password"
                    fullWidth
                    helperText={passwordError ? 'Неверный пароль! Попробуйте снова' : 'Введите ваш пароль'}
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
