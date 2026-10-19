import SignIn from "../service/signin.service.js";

function useSignIn() {
    const handleSignIn = async ({ email, password }) => {
        try {
            const result = await SignIn({ email, password })
            console.log("Usuario Logado", result)
        } catch (issue) {
            console.log("Falha ao Logar: ", issue.message)
        }
    }
    return { handleSignIn }
}

export default useSignIn