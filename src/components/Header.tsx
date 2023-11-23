import { useAuth } from "../context/AuthContext";
import HeaderLinkButton from "./shared/HeaderLinkButton";

const Header = () => {
    const auth = useAuth()

    return (
        <ul id="header">
           {!auth ? null : (
               auth.user ? (
                    <HeaderLinkButton
                   bg="#51538f"
                   to="/"
                   text="Logout"
                   textColor="#000"
                   onClick={auth.logout}
                    />
               ):(
               <>
                   <HeaderLinkButton
                   bg="#00fffc"
                   to="/login"
                   text="Login"
                   textColor="#fff"
                   onClick={auth.login}
                   />
                   <HeaderLinkButton
                   bg="#51538f"
                   to="/signup"
                   text="Signup"
                   textColor="#000"
                   onClick={auth.signup}
                   />
               </>
               )
           )}
        </ul>
    )
}

export default Header
