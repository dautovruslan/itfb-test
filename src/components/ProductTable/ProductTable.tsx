import React, { useEffect, useState } from 'react'
import { Divider } from '@mui/material'
import { TableHeader, ContentContainer } from './ProductTable.styles'
import { ProductCard } from '../ProductCard/ProductCard'
import { Product } from '../ProductCard/ProductCard.types'

export const ProductTable = () => {
    const [productList, setProductList] = useState<Product[]>([])
    useEffect(() => {
        fetch('http://localhost:3000/productList')
            .then(res => res.json() as unknown as Product[])
            .then(data => setProductList(data))
            .catch(e => console.log(e))
    }, [])
    return (
        <>
            <TableHeader>
                <Divider>Каталог</Divider>
            </TableHeader>
            <ContentContainer>
                {productList.map(el => (
                    <ProductCard
                        key={`card-${el.id}`}
                        id={el.id}
                        name={el.name}
                        shortDescription={el.shortDescription}
                        fullDescription={el.fullDescription}
                        price={el.price}
                        rating={el.rating}
                        img={el.img}
                    />
                ))}
            </ContentContainer>
        </>
    )
}
