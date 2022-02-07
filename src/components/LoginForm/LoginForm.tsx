import React, { useState } from 'react'
import { Modal } from '../Modal/Modal'
import { AuthForm } from './AuthForm/AuthForm'
import { RegistrationForm } from './RegistrationForm/RegistrationForm'
import { Props } from './LoginForm.types'

export const LoginForm: React.FC<Props> = ({ isShown, onClose }) => {
    const [stage, setStage] = useState<'login' | 'register'>('login')

    return (
        <Modal isShown={isShown} onClose={onClose}>
            {stage === 'login' && <AuthForm handleRegister={() => setStage('register')} closeModal={onClose} />}
            {stage === 'register' && <RegistrationForm handleLogin={() => setStage('login')} closeModal={onClose} />}
        </Modal>
    )
}
