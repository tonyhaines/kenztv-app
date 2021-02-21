import React from "react"
import styled from "@emotion/styled"

const condition = (props) => {
  const Temp = styled.h1`
    font-weight: "Fira Sans", sans-serif;
    font-size: 2rem;
    font-weight: 200;
  `
  const State = styled.h3`
    font-family: "Merriweather", sans-serif;
    font-size: 1.2rem;
  `
  return (
    <>
      <Temp>20</Temp>
      <State>Clouds</State>
    </>
  )
}

export default condition
