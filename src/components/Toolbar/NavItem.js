import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const navItem = (props) => {
  const NavItem = styled.li`
    padding: 0 0.5rem;
  `
  const NavItemI = styled(Link)`
    color: white;
    text-decoration: none;
    &: hover {
      color: orange;
    }
    &: active {
      color: orange;
    } ;
  `
  return (
    <NavItem>
      <NavItemI to={props.item.reference}>{props.item.name}</NavItemI>
    </NavItem>
  )
}

export default navItem
