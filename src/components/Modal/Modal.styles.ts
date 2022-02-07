import styled from 'styled-components'

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgb(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ModalContent = styled.div`
    width: 480px;
    background: white;
    padding: 24px 32px;
    border-radius: 12px;
`
