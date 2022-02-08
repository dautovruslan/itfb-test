import create from 'zustand'

export type User = {
    name: string
    lastName: string
    password: string
    email: string
    id: string | number
}

interface UsersState {
    userList: Record<string, User>
    activeUser: User | null
    addUser: (user: User) => void
    setActiveUser: (user: User | null) => void
}

export const useStore = create<UsersState>(set => ({
    userList: {},
    activeUser: null,
    addUser: user => {
        set(state => ({
            userList: {
                ...state.userList,
                [user.email]: user,
            },
        }))
    },
    setActiveUser: user => {
        set(() => ({
            activeUser: user,
        }))
        if (user) {
            localStorage.setItem('user', user.email)
        } else {
            localStorage.removeItem('user')
        }
    },
}))
