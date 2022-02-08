import styled from 'styled-components'
import { TextField } from '@mui/material'

export const Wrapper = styled.div`
    width: 560px;
`

export const RatingContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`
export const Header = styled.div`
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
`
export const InputWrapper = styled.div``

export const CustomDisableInput = styled(TextField)(() => ({
    '.MuiInputBase-input.Mui-disabled': {
        WebkitTextFillColor: '#000',
        color: '#000',
    },
}))
