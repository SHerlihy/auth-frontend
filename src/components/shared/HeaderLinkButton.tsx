import { NavLink, NavLinkProps } from "./NavLink"

const HeaderLinkButton = (props: NavLinkProps) => {
    return (
        <li className="header-link-button">
        
            <NavLink {...props}/>
        </li>
    )
}

export default HeaderLinkButton
