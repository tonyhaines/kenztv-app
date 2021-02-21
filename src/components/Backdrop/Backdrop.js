import React from "react"
import styled from "@emotion/styled"

const backDrop = (props) => {
  const BackDrop = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 100;
  `

  return <BackDrop onClick={props.click} />
}

export default backDrop
