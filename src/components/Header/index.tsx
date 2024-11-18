import { HeaderContainer } from "./styles"

import { Scroll, Timer } from "phosphor-react"
import { NavLink } from "react-router-dom"
import LogoIgnite from "../../assets/logo-ignite.svg"

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={LogoIgnite} alt="" />
      <nav>
        <NavLink to="/">
          <Timer size={24} alt="Timer" />
        </NavLink>
        <NavLink to="/history">
          <Scroll size={24} alt="Histórico" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
