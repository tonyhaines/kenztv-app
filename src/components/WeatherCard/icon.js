import React from "react"
import styled from "@emotion/styled"

const icon = (props) => {
  const Icon = styled.img`
    width: 35%;
  `
  return (
    <Icon
      src="./img/iconfinder_weather-icons-cloudy-2_2087719.png"
      alt="Weather Icon"
    />
  )
}

export default icon
