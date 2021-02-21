import React from "react"
import styled from "@emotion/styled"

const userTable = (props) => {
  const Card = styled.div`
    margin: 0 auto;
    padding: 10px;
  `
  return (
    <Card>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Password</th>
            <th>Updated</th>
            <th>Created</th>
            <th>Organisation</th>
          </tr>
        </thead>
        <tbody>
          {props.userList.map(function (person, index) {
            return (
              <tr key={index}>
                <td>{person.id}</td>
                <td>{person.email}</td>
                <td>{person.password}</td>
                <td>{person.updated_at}</td>
                <td>{person.created_at}</td>
                <td>{person.organisationId}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Card>
  )
}

export default userTable
