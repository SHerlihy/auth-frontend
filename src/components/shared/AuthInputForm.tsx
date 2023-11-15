import CustomInput from "./CustomInput"
import { IoIosLogIn } from "react-icons/io"

type InputField = {
    type: string,
    name: string,
    label: string,
}

type AuthInputFormProps = {
    title: string,
    handleSubmit: (e:React.FormEvent<HTMLFormElement>)=>Promise<void>,
    inputFields: InputField[],
}

const AuthInputForm = ({title, handleSubmit, inputFields}:AuthInputFormProps) => {
    return (
            <form
                onSubmit={handleSubmit}
                style={{
                    margin:"auto",
                    padding:"30px",
                    boxShadow:"10px 10px 20px #000",
                    borderRadius:"10px",
                    border:"none",
                }}
            >
                <p>{title}</p>
                {inputFields.map(({type,name,label}, idx)=>{
                return (<CustomInput key={idx} type={type} name={name} label={label} />)
                })}
                <button type="submit" >
                    {title}
                    <IoIosLogIn/>
                </button>
            </form>
    )
}

export default AuthInputForm
