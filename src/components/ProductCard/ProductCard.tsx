import React from 'react'
import { Rating } from '@mui/material'
import { Props } from './ProductCard.types'
import {
    CardWrapper,
    DescriptionContainer,
    PriceContainer,
    ImageContainer,
    ProductNameContainer,
    Description,
} from './ProductCard.styles'

export const ProductCard: React.FC<Props> = ({ productId, description, imageUrl, name, children }) => (
    <CardWrapper>
        <ImageContainer>
            <img src="https://dummyproducts-api.herokuapp.com/gadgets/mobilephone_150.png" alt="img_picture" />
        </ImageContainer>
        <DescriptionContainer>
            <ProductNameContainer>Отличненький телефончик</ProductNameContainer>
            <Rating value={5} readOnly />
            <Description>
                Айфон от мира вьетнамских подделок. Камера 0.2 Мп, тачскрин, пластиковый корпус, 16-голосная полифония.
                Хороший подарок для жены, с которой ты хочешь развестись!
            </Description>
        </DescriptionContainer>
        <PriceContainer>18273 ₽</PriceContainer>
    </CardWrapper>
)
