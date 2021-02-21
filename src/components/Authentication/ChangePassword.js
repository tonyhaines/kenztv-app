import React, { useState, useContext, useEffect } from "react"
import { AccountContext } from "./Accounts"

export default () => {
  const [password, setPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const { getSession, authenticate } = useContext(AccountContext)

  const onSubmit = event => {
    event.preventDefault()
    console.log(password, newPassword)
    getSession((err, { user, email }) => {
      if (err) {
        console.error(err)
        return
      }
      // console.log("Session email", email)

      authenticate(email, password, (err, success) => {
        if (err) {
          console.error(err)
          return
        } else if (success) {
          user.changePassword(password, newPassword, (err, result) => {
            if (err) {
              console.error(err)
              return
            }
            console.log(result)
          })
        }
      })
    })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={password} onChange={event => setPassword(event.target.value)} />
        <input value={newPassword} onChange={event => setNewPassword(event.target.value)} />
        <button type="submit">Change Password</button>
      </form>
    </div>
  )
}
