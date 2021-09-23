import React, { createContext } from "react"
// import { navigate } from "gatsby"

const AuthContext = createContext()
export const AuthProvider = props => {
    const [user, setUser] = React.useState(null)
    // React.useEffect(() => {
    //     magic = new Magic(magicKey)
    //     checkUserLoggedIn()
    // }, [])
    // const loginUser = async email => {
    //     try {
    //         await magic.auth.loginWithMagicLink({ email })
    //         setUser({ email })
    //         navigate("/profile")
    //     } catch (err) {
    //         setUser(null)
    //     }
    // }
    // const logoutUser = async () => {
    //     try {
    //         await magic.user.logout()
    //         setUser(null)
    //         navigate("/")
    //     }
    //     catch (err) {

    //     }

    // }

    // const checkUserLoggedIn = async () => {
    //     try {
    //         const isLoggedIn = await magic.user.isLoggedIn()
    //         if (isLoggedIn) {
    //             const { email } = await magic.user.getMetadata()
    //             setUser({ email })

    //             // just for testing

    //             const token = await getToken()
    //             console.log("token", token)
    //         }
    //     }
    //     catch (err) {

    //     }
    // }

    // const getToken = async () => {
    //     try {
    //         const token = await magic.user.getIdToken()
    //         return token
    //     }
    //     catch (err) {

    //     }
    // }

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext
