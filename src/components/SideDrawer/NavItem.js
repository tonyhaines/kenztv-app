import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const navItem = (props) => {
  const NavItem = styled.li`
    margin: 0.5rem 0;
  `
  const NavItemI = styled(Link)`
    colour: blue;
    text-decoration: none;
    1.2rem;
    &: hover {
      color: orange;
    };
    &: active {
      color: orange;
    };
  `

  return (
    <NavItem>
      <NavItemI to={props.item.reference}>{props.item.name}</NavItemI>
    </NavItem>
  )
}

export default navItem
