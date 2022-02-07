import styled from 'styled-components'

export const CardWrapper = styled.article`
    padding: 16px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    max-width: 860px;
    display: flex;
    margin: 0 auto;
    cursor: pointer;
`
export const ImageContainer = styled.div`
    padding: 20px 0 20px 20px;
    flex-basis: 200px;
`
export const DescriptionContainer = styled.div`
    padding: 20px 0;
    margin: 0 26px;
    flex: 1 1;
`
export const PriceContainer = styled.div`
    padding: 20px 20px 20px 0;
    font-size: 20px;
    color: #64748b;
    font-weight: 700;
    margin: 0 0 14px;
    width: max-content;
`
export const ProductNameContainer = styled.h2`
    font-size: 20px;
    color: #64748b;
    font-weight: 700;
    margin: 0 0 14px 0;
`
export const Description = styled.p`
    font-size: 14px;
    font-weight: lighter;
`
