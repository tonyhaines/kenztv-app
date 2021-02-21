import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const logo = (props) => {
  const Logo = styled.div`
    margin-left: 1rem;
  `
  const LogoAnchor = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 2rem;
  `
  return (
    <Logo>
      <LogoAnchor to={"/"}>{props.logo}</LogoAnchor>
    </Logo>
  )
}

export default logo
