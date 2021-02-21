import React from "react"
import styled from "@emotion/styled"
import NavItem from "./NavItem"

const navItemList = (props) => {
  let navItemList = props.navItemList
  const NavItemList = styled.ul`
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
  `
  return (
    <NavItemList>
      {navItemList.map(function (item, index) {
        return <NavItem key={index} item={item} />
      })}
    </NavItemList>
  )
}

export default navItemList
