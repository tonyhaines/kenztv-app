import React from "react"
import styled from "@emotion/styled"
import UserTable from "../users/userTable"

const contentArea = (props) => {
  const ContentArea = styled.main`
    margin-top: ${props.toolBarHeight};
  `
  return (
    <ContentArea>
      <UserTable userList={props.userList} />
    </ContentArea>
  )
}

export default contentArea
