/* eslint-disable @typescript-eslint/ban-ts-comment */

import React, { KeyboardEventHandler, useEffect } from 'react'
import { Props } from './Modal.types'
import { ModalContent, ModalOverlay } from './Modal.styles'

export const Modal: React.FC<Props> = ({ isShown, onClose, children }) => {
    const closeOnEscapeHandler: KeyboardEventHandler = (event): void => {
        if ((event.charCode || event.keyCode) === 27) {
            onClose()
        }
    }

    useEffect(() => {
        // @ts-ignore TODO: fix event type
        document.body.addEventListener('keydown', closeOnEscapeHandler)
        return () => {
            // @ts-ignore
            document.body.removeEventListener('keydown', closeOnEscapeHandler)
        }
    }, [])

    return !isShown ? null : (
        <ModalOverlay onClick={() => onClose()}>
            <ModalContent onClick={e => e.stopPropagation()}>{children}</ModalContent>
        </ModalOverlay>
    )
}
