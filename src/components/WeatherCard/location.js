import React from "react"
import styled from "@emotion/styled"

const location = (props) => {
  const Container = styled.div`
    text-align: center;
  `
  const City = styled.h1`
    font-family: "Merriweather", sans-serif;
    font-size: 1.6rem;
  `
  const Country = styled.h3`
    font-weight: "Fira Sans", sans-serif;
    font-size: 1.1rem;
  `
  return (
    <Container>
      <City>Bristol</City>
      <Country>England</Country>
    </Container>
  )
}

export default location
