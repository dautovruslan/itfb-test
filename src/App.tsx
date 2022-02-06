import React from 'react'
import styled from 'styled-components'

import { Header } from './components/Header/Header'

const PageContainer = styled.div`
    max-width: 1280px;
    margin: 0 auto;
`

function App() {
    return (
        <>
            <Header />
            <PageContainer />
        </>
    )
}

export default App
