import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import AuthInputForm from "../components/shared/AuthInputForm";

const Signup = () => {
    const navigate=useNavigate()
    const auth = useAuth()

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const name = formData.get("name") as string
        const email = formData.get("email") as string
        const password = formData.get("password") as string
        try {
            await auth?.signup(name,email,password)
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    const inputFields = [
        {
            type: "name",
            name: "name",
            label: "Name",
        },
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
            <AuthInputForm title="Signup" inputFields={inputFields} handleSubmit={handleSubmit} />
        </main>
    )
}

export default Signup
