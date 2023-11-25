import React from "react";
import { useAuth } from "../context/AuthContext";
import AuthInputForm from "../components/shared/AuthInputForm";
import { useNavigate } from "@tanstack/react-router";

const Login = () => {
    const navigate=useNavigate({
        from: "/login"
    })

    const auth = useAuth()

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const email = formData.get("email") as string
        const password = formData.get("password") as string
        try {
            await auth?.login(email,password)
            navigate({
                to: "/"
            })
        } catch (error) {
            console.log(error)
        }
    }

    const inputFields = [
        {
            type: "email",
            name: "email",
            label: "Email",
        },
        {
            type: "password",
            name: "password",
            label: "Password",
        },
    ]

    return (
        <main>
            <AuthInputForm title="Login" inputFields={inputFields} handleSubmit={handleSubmit} />
        </main>
    )
}

export default Login
