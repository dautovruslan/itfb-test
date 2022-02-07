import React from 'react'
import styled from 'styled-components'

import { Header } from './components/Header/Header'
import { ProductCard } from './components/ProductCard/ProductCard'
import { ProductTable } from './components/ProductTable/ProductTable'

const PageContainer = styled.div`
    max-width: 1280px;
    margin: 64px auto;
`

function App() {
    return (
        <>
            <Header />
            <PageContainer>
                <ProductTable />
            </PageContainer>
        </>
    )
}

export default App
