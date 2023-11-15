import { Link } from "react-router-dom";

type Props = {
    to: string;
    bg: string;
    text: string;
    textColor: string;
    onClick?: (...args:unknown[])=>Promise<void>;
}

const NavLink = (props: Props) => {
    return (
    <Link
        onClick={props.onClick}
        to={props.to}
        style={{background: props.bg,color:props.textColor}}
        className="nav-link"
    >
            {props.text}
    </Link>
    )
}

export default NavLink
