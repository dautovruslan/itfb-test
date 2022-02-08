import React from 'react'
import { Rating, Tooltip } from '@mui/material'
import { Link } from 'react-router-dom'
import { Product } from './ProductCard.types'
import {
    CardWrapper,
    DescriptionContainer,
    PriceContainer,
    ImageContainer,
    ProductNameContainer,
    Description,
} from './ProductCard.styles'

export const ProductCard: React.FC<Product> = ({ name, img, id, price, shortDescription, rating }) => (
    <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'unset' }}>
        <CardWrapper>
            <ImageContainer>
                <img src={img} width={180} alt={name} />
            </ImageContainer>
            <DescriptionContainer>
                <ProductNameContainer>{name}</ProductNameContainer>
                <Tooltip title={`${rating}`} placement="right" open>
                    <Rating value={rating} readOnly precision={0.1} />
                </Tooltip>
                <Description>{shortDescription}</Description>
            </DescriptionContainer>
            <PriceContainer>{price}</PriceContainer>
        </CardWrapper>
    </Link>
)
