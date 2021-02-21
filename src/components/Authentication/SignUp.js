import React, { useState, useEffect } from "react"
import UserPool from "./AwsUserPool"

export default () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = (event) => {
    event.preventDefault()
    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.log(err)
      } else if (data) {
        console.log(data)
      }
    })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  )
}
