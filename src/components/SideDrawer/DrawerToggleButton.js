import React from "react"
import styled from "@emotion/styled"

const toggleDrawerButton = (props) => {
  const ToggleButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 25px;
    width: 30px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    box-sizing: border-box;
    &: focus {
      outline: none;
    } ;
  `
  const ToggleButtonLine = styled.div`
    width: 30px;
    height: 2px;
    background: white;
  `

  return (
    <ToggleButton onClick={props.click}>
      <ToggleButtonLine />
      <ToggleButtonLine />
      <ToggleButtonLine />
    </ToggleButton>
  )
}

export default toggleDrawerButton
