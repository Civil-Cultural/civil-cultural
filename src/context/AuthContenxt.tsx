/* ----------- RESOURCES ----------- */
import { createContext, useEffect, useState } from 'react'
import { HttpException } from 'Utils/HtttpException'
import { useCookie } from 'react-use'
import { useApi } from 'Hooks/useApi'


/* ----------- TYPES ----------- */
import { AuthContextProps, AuthProviderProps, UserAuth } from 'Contracts/Context'

/* ----------- TYPES MANUAL ----------- */
type UserLignIn = {
    userOrEmail: string;
    password: string;
}

export const AuthContext = createContext({} as AuthContextProps)


export function AuthProvider({ children }: AuthProviderProps) {
    const [userAuth, setUserAuth, deleteUserAuth] = useCookie('civil_user')
    const [user, setUser] = useState<UserAuth | null>(null)
    const isAuthenticated = !!user

    const signIn = async ({ userOrEmail , password }: UserLignIn) => {
        const uri = process.env.NEXT_PUBLIC_URL_API
        const axios = await useApi()
        const response = await axios.post(`${uri}/users/signin`, { userOrEmail, password })

        if (response.status !== 200)
            throw new HttpException(response.data.message, response.status, response.statusText)

        setUserAuth(response.data)
        setUser(response.data)
        console.log(response.data)
    }

    const singOut = () => deleteUserAuth()

    const authProps: AuthContextProps = {
        isAuthenticated,
        user,
        signIn,
        singOut
    }

    return (
        <AuthContext.Provider value={authProps}>
            {children}
        </AuthContext.Provider>
    )
}
