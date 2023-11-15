import { AppBar, Toolbar } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import NavLink from "./shared/NavLink";

const Header = () => {
    const auth = useAuth()

    return (
        <AppBar sx={{bgcolor: "transparent", position: "static", boxShadow: "none"}}>
            <Toolbar sx={{display: "flex"}}>
                <div>
                    {!auth ? null : (
                        auth.user ? (
                        <>
                            <NavLink
                            bg="#51538f"
                            to="/"
                            text="Logout"
                            textColor="#000"
                            onClick={auth.logout}
                            />
                        </>
                        ):(
                        <>
                            <NavLink
                            bg="#00fffc"
                            to="/login"
                            text="Login"
                            textColor="#fff"
                            onClick={auth.login}
                            />
                            <NavLink
                            bg="#51538f"
                            to="/signup"
                            text="Signup"
                            textColor="#000"
                            onClick={auth.signup}
                            />
                        </>
                        )
                    )}
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header
