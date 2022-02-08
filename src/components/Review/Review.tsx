import React, { useState } from 'react'
import { Rating, Tooltip } from '@mui/material'
import { InputWrapper, Wrapper, RatingContainer, Header, CustomDisableInput } from './Review.styles'
import { Props } from './Review.types'

export const Review: React.FC<Props> = ({ rating, name, text }) => (
    <Wrapper>
        <Header>
            <RatingContainer>
                Оценка
                <Tooltip title={`${rating ?? ''}`} open placement="right">
                    <Rating value={rating} readOnly precision={0.1} />
                </Tooltip>
            </RatingContainer>
            {name}
        </Header>
        <InputWrapper>
            <CustomDisableInput multiline minRows={2} fullWidth inputProps={{ readOnly: true }} value={text} disabled />
        </InputWrapper>
    </Wrapper>
)
