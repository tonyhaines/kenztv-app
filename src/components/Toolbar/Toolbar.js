import React from "react"
import styled from "@emotion/styled"
import NavItemList from "./NavItemList"
import Logo from "./Logo"
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton"

const toolbar = (props) => {
  let toolBarHeight = props.toolBarHeight
  // let navItemList = props.toolBarItems.navItemList
  // let logo = props.toolBarItems.logo

  const Toolbar = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #695340;
    height: ${toolBarHeight};
  `
  const ToolbarNavigation = styled.header`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 1rem;
  `
  const Spacer = styled.header`
    flex: 1;
  `
  return (
    <Toolbar>
      <ToolbarNavigation>
        <DrawerToggleButton click={props.drawerToggleClickHandler} />
        <Logo logo={props.toolBarItems.logo} />
        <Spacer></Spacer>
        <NavItemList navItemList={props.toolBarItems.navItemList} />
      </ToolbarNavigation>
    </Toolbar>
  )
}

export default toolbar
