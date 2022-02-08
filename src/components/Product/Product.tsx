import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Divider } from '@mui/material'
import {
    Wrapper,
    ProductContainer,
    ProductTitleWrapper,
    DescriptionContent,
    DescriptionHeader,
    Title,
    Forbidden,
} from './Product.styles'
import { Product as ProductInterface } from '../ProductCard/ProductCard.types'
import { Comment } from './Product.types'
import { SubmitReview } from '../Review/SubmitReview/SubmitReview'
import { Review } from '../Review/Review'
import { ReviewList } from '../Review/ReviewList/ReviewList'
import { Props as SubmitReviewProps } from '../Review/SubmitReview/SubmitReview.types'
import { useStore } from '../../usersStore'

export const Product: React.FC = () => {
    const [productData, setProductData] = useState<ProductInterface>()
    const [comments, setComments] = useState<Comment[]>([])
    const { activeUser } = useStore()
    const { id } = useParams()

    const userName = `${activeUser?.name ?? ''} ${activeUser?.lastName ?? ''}`

    const getData = () => {
        fetch(`http://localhost:3000/productList/${id ?? ''}`)
            .then(res => res.json())
            .then(data => setProductData(data as ProductInterface))
            .catch(e => console.log(e))
    }
    const getComments = () => {
        fetch(`http://localhost:3000/commentList?productId=${id ?? ''}`)
            .then(res => res.json())
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            .then(data => setComments(data as Comment[]))
            .catch(e => console.log(e))
    }
    const submitHandler: SubmitReviewProps['onSubmit'] = (rating, text) => {
        const review = { text, rating, name: `${userName}`, productId: id ?? '' }
        fetch(`http://localhost:3000/commentList`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(review),
        })
            .then(res => {
                if (res.ok) {
                    getComments()
                }
            })
            .catch(e => console.log(e))
    }
    useEffect(() => {
        getData()
        getComments()
    }, [])
    return (
        <>
            {!activeUser && (
                <Forbidden>
                    Пожалуйста, войдите если у вас есть аккаунт или зарегистрируйтесь, как новый пользователь, чтобы
                    получить доступ к этой странице
                </Forbidden>
            )}
            {activeUser && (
                <Wrapper>
                    <ProductTitleWrapper>
                        <Title>{productData?.name}</Title>
                        <div>Оценка: {productData?.rating}</div>
                    </ProductTitleWrapper>
                    <ProductContainer>
                        <img src={productData?.img} alt="product-logo" width={300} />
                        <div>
                            <DescriptionHeader>Характеристики:</DescriptionHeader>
                            <DescriptionContent>{productData?.shortDescription}</DescriptionContent>
                            <DescriptionHeader>Описание:</DescriptionHeader>
                            <DescriptionContent>{productData?.fullDescription}</DescriptionContent>
                            <DescriptionHeader>Цена: {productData?.price}</DescriptionHeader>
                        </div>
                    </ProductContainer>
                    <Divider>
                        <h2>Отзывы</h2>
                    </Divider>
                    <ReviewList>
                        <SubmitReview onSubmit={submitHandler} />
                        {comments.map(el => (
                            <Review name={el.name} rating={el.rating} text={el.text} />
                        ))}
                    </ReviewList>
                </Wrapper>
            )}
        </>
    )
}
