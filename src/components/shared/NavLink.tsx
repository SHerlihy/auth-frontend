import { Link } from "@tanstack/react-router";

export type NavLinkProps = {
    to: string;
    bg: string;
    text: string;
    textColor: string;
    onClick?: (...args:unknown[])=>Promise<void>;
}

export const NavLink = (props: NavLinkProps) => {
    return (
    <Link
        onClick={props.onClick}
        to={props.to}
        style={{background: props.bg,color:props.textColor}}
    >
            {props.text}
    </Link>
    )
}
