import React from "react"
import Logo from "./Logo"
import NavItems from "./NavItems"
import CartWidget from "./CartWidget"

function NavBar() {
  return (
    <div>
        <Logo/>
        <NavItems/>
        <CartWidget/>
    </div>
  )
}

export default NavBar