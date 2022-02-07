import React from 'react'
import { Divider } from '@mui/material'
import { TableHeader, ContentContainer } from './ProductTable.styles'
import { ProductCard } from '../ProductCard/ProductCard'

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
    </>
)
