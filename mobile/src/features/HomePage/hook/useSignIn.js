import { useState } from "react";
import SignIn from "../service/signin.service.js";

function useSignIn() {
    const [loading, setLoading] = useState(false)
    const handleSignIn = async ({ user }) => {
        try {
            const result = await SignIn({ user })
            setLoading(true)
            console.log("Usuario Logado", result)
        } finally {
            setLoading(false)
        }
    }
    return { handleSignIn, loading }
}

export default useSignIn