import React, { useEffect, useLayoutEffect } from 'react'
import styled from 'styled-components'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { ProductTable } from './components/ProductTable/ProductTable'
import { User, useStore } from './usersStore'
import { Product } from './components/Product/Product'

const PageContainer = styled.div`
    max-width: 1280px;
    margin: 64px auto;
`

function App() {
    const { addUser, setActiveUser, userList } = useStore()
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:3000/users')
            const data = (await res.json()) as User[]
            addUser(data)
        }
        fetchData().catch(e => console.log(e))
    }, [])
    useEffect(() => {
        const activeUser = localStorage.getItem('user')

        if (activeUser && Object.keys(userList).length) {
            setActiveUser(userList[activeUser])
        }
    }, [userList])
    return (
        <BrowserRouter>
            <Header />
            <PageContainer>
                <Routes>
                    <Route path="/" element={<ProductTable />} />
                    <Route path="/product/:id" element={<Product />} />
                </Routes>
            </PageContainer>
        </BrowserRouter>
    )
}

export default App
