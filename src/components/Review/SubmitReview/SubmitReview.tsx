import React, { useState } from 'react'
import { Button, Rating, TextField, Tooltip } from '@mui/material'
import { Props } from './SubmitReview.types'
import { InputWrapper, Wrapper, RatingContainer, Header } from './SubmitReview.styles'

export const SubmitReview: React.FC<Props> = ({ onSubmit }) => {
    const [reviewText, setReviewText] = useState('')
    const [rating, setRating] = useState<number | null>()

    const cleanup = () => {
        setReviewText('')
        setRating(null)
    }

    return (
        <Wrapper>
            <Header>
                <RatingContainer>
                    Ваша оценка
                    <Tooltip title={`${rating ?? ''}`} open={!!rating} placement="right">
                        <Rating value={rating} onChange={(e, value) => setRating(value)} precision={0.5} />
                    </Tooltip>
                </RatingContainer>
                <Button
                    disabled={!rating}
                    onClick={() => {
                        onSubmit(rating as number, reviewText)
                    }}
                    variant="contained"
                >
                    Оставить отзыв
                </Button>
            </Header>
            <InputWrapper>
                <TextField multiline rows={4} fullWidth onChange={e => setReviewText(e.target.value)} />
            </InputWrapper>
        </Wrapper>
    )
}
