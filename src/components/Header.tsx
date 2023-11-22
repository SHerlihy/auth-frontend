import { useAuth } from "../context/AuthContext";
import NavLink from "./shared/NavLink";

const Header = () => {
    const auth = useAuth()

    return (
        <ul id="header">
           {!auth ? null : (
               auth.user ? (
               <li>
                   <NavLink
                   bg="#51538f"
                   to="/"
                   text="Logout"
                   textColor="#000"
                   onClick={auth.logout}
                   />
               </li>
               ):(
               <>
               <li>
                   <NavLink
                   bg="#00fffc"
                   to="/login"
                   text="Login"
                   textColor="#fff"
                   onClick={auth.login}
                   />
               </li>
               <li>
                   <NavLink
                   bg="#51538f"
                   to="/signup"
                   text="Signup"
                   textColor="#000"
                   onClick={auth.signup}
                   />
               </li>
               </>
               )
           )}
        </ul>
    )
}

export default Header
