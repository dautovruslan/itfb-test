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
    z-index: 2000;
`
export const ModalContent = styled.div`
    width: 440px;
    background: white;
    padding: 42px 42px;
    border-radius: 12px;
`
