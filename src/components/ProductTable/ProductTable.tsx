import React from 'react'
import { Divider } from '@mui/material'
import { TableHeader, ContentContainer } from './ProductTable.styles'
import { ProductCard } from '../ProductCard/ProductCard'
import { Modal } from '../Modal/Modal'
import { AuthForm } from '../LoginForm/AuthForm/AuthForm'

export const ProductTable = () => (
    <>
        <TableHeader>
            <Divider>Каталог</Divider>
        </TableHeader>
        <ContentContainer>
            <ProductCard name="" description="" imageUrl="" productId="" />
            <ProductCard name="" description="" imageUrl="" productId="" />
            <ProductCard name="" description="" imageUrl="" productId="" />
            <ProductCard name="" description="" imageUrl="" productId="" />
            <ProductCard name="" description="" imageUrl="" productId="" />
            <ProductCard name="" description="" imageUrl="" productId="" />
        </ContentContainer>
        <Modal isShown onClose={() => {}}>
            <AuthForm />
        </Modal>
    </>
)
