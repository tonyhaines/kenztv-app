import React, { useState, useContext } from "react"
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js"
import { AccountContext } from "./Accounts"
import Pool from "./AwsUserPool"

export default () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { authenticate } = useContext(AccountContext)

  const onSubmit = event => {
    event.preventDefault()

    authenticate(email, password, function (err, data) {
      if (err) {
        console.error("Failed to login", err)
        return
      }
      console.log("logged in!", data)
    })
    // .then(data => {
    //   console.log("logged in!", data)
    // })
    // .catch(err => {
    //   console.error("Failed to login", err)
    // })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={email} onChange={event => setEmail(event.target.value)} />
        <input value={password} onChange={event => setPassword(event.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
