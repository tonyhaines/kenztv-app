import React from "react"
import styled from "@emotion/styled"
import Location from "./location"
import Icon from "./icon"
import Condition from "./condition"

const WeatherCard = (props) => {
  let localTemp = props.temperature
  let highColour = 0
  let lowColour = 0
  let red = 0
  let blue = 0
  if (12 < localTemp) {
    highColour = (1 - (localTemp - 12) / 28) * 255
    lowColour = highColour - 150
    red = 255
  } else if (12 >= localTemp) {
    highColour = (1 - (localTemp + 20) / 32) * 255
    lowColour = highColour - 150
    blue = 255
  }

  const Card = styled.div`
    margin: 0 auto;
    background: linear-gradient(
      to bottom,
      rgb(${red}, ${lowColour}, ${blue}),
      rgb(${red}, ${highColour}, ${blue})
    );
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `
  return (
    <Card>
      <Location />
      <Icon />
      <Condition />
    </Card>
  )
}

export default WeatherCard
