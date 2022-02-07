import create from 'zustand'

type User = {
    name: string
    lastName: string
    password: string
    email: string
}

interface UsersState {
    userList: Record<string, User>
    activeUser: User | null
    addUser: (user: User) => void
    setActiveUser: (user: User | null) => void
    isAuthenticated: boolean
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
            isAuthenticated: !!user,
        }))
    },
    isAuthenticated: false,
}))
