import React from "react"
import styled from "@emotion/styled"
import NavItemList from "./NavItemList"

const sideDrawer = (props) => {
  const SideDrawer = styled.nav`
    height: 100%;
    background: white;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    max-width: 400px;
    z-index: 200;
    transform: translateX(${props.show ? "0" : "-100%"});
    transition: transform 1s ease-out;
  `

  return (
    <SideDrawer onClick={props.click}>
      <NavItemList navItemList={props.sideBarItemList} />
    </SideDrawer>
  )
}

export default sideDrawer
