import { HeaderContainer } from "./styles";
import Logo from "../../assets/Logo.svg"
import { MapPin, ShoppingCart} from "phosphor-react"
import { NavLink } from "react-router-dom";

export function Header(){
    return(
        <HeaderContainer>
            <img src={Logo} alt=""/>
            <nav>
                <NavLink to="/" title="localização" >
                    <MapPin size={32} />
                    <span>Fortaleza,CE</span>
                </NavLink>
                <NavLink to="/" title="Carrinho">
                    <ShoppingCart size={32} />
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}