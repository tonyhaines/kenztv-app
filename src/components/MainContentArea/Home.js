import React from "react"
import styled from "@emotion/styled"

const contentArea = (props) => {
  const ContentArea = styled.main`
    margin-top: ${props.toolBarHeight};
    padding: 10px;
  `
  return <ContentArea>Home Here</ContentArea>
}

export default contentArea
