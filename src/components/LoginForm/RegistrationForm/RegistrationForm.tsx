import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'
import { Wrapper, Title, InputWrapper } from './RegistrationForm.styles'
import { Props } from './RegistrationForm.types'
import { useStore } from '../../../usersStore'

export const RegistrationForm: React.FC<Props> = ({ handleLogin, closeModal }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [isEmailValid, setEmailValid] = useState<0 | 1 | 2>(0)
    const [isPasswordValid, setPasswordValid] = useState(true)

    const { addUser, setActiveUser, userList } = useStore()

    const validateEmail = (emailString: string): boolean => {
        const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        if (!emailString.trim().match(pattern)) {
            setEmailValid(1)
            return false
        }
        setEmailValid(0)
        return true
    }

    const validatePassword = (passwordString: string): boolean => {
        if (passwordString.length < 8) {
            setPasswordValid(false)
            return false
        }
        setPasswordValid(true)
        return true
    }
    const handleRegister = () => {
        if (!userList[email]) {
            const id = Math.floor(Math.random() * 100000)
            const user = { email, name, lastName, password, id }
            addUser(user)
            setActiveUser(user)
            void fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            })
            closeModal()
            return
        }
        setEmailValid(2)
    }
    const onRegisterAttempt = () => {
        const checkEmail = validateEmail(email)
        const checkPassword = validatePassword(password)
        if (checkEmail && checkPassword) {
            handleRegister()
        }
    }
    return (
        <Wrapper>
            <Title>Регистрация</Title>
            <InputWrapper>
                <TextField label="Имя" type="text" fullWidth value={name} onChange={e => setName(e.target.value)} />
            </InputWrapper>
            <InputWrapper>
                <TextField
                    label="Фамилия"
                    type="text"
                    fullWidth
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
            </InputWrapper>
            <InputWrapper>
                <TextField
                    error={isEmailValid === 1 || isEmailValid === 2}
                    helperText={
                        isEmailValid === 1
                            ? 'Некорректный формат email'
                            : isEmailValid === 2
                            ? 'Пользователь с таким email уже существует'
                            : ''
                    }
                    label="Email"
                    type="email"
                    fullWidth
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </InputWrapper>
            <InputWrapper>
                <TextField
                    error={!isPasswordValid}
                    label="Пароль"
                    type="password"
                    fullWidth
                    helperText="Пароль должен содержать не менее 8 символов"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </InputWrapper>
            <Button
                onClick={onRegisterAttempt}
                size="large"
                variant="contained"
                style={{ marginBottom: '16px', width: '350px' }}
            >
                Зарегистрироваться
            </Button>
            <Button onClick={handleLogin} size="large" style={{ width: '350px' }}>
                Уже есть аккаунт?
            </Button>
        </Wrapper>
    )
}
