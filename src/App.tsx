import React, { useEffect, useLayoutEffect } from 'react'
import styled from 'styled-components'

import { Header } from './components/Header/Header'
import { ProductTable } from './components/ProductTable/ProductTable'
import { User, useStore } from './usersStore'

const PageContainer = styled.div`
    max-width: 1280px;
    margin: 64px auto;
`

function App() {
    const { addUser, setActiveUser, userList } = useStore()
    useLayoutEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:3000/users')
            const data = (await res.json()) as User[]
            data.forEach(el => addUser(el))
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
        <>
            <Header />
            <PageContainer>
                <ProductTable />
            </PageContainer>
        </>
    )
}

export default App
