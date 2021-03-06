import React from "react"
import styled from "@emotion/styled"
import NavItem from "./NavItem"

const navItemList = (props) => {
  let navItemList = props.navItemList
  const NavItemList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
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
