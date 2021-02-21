import React, { useState, useEffect, useContext } from "react"
import { AccountContext } from "../Authentication/Accounts"
import ChangePassword from "../Authentication/ChangePassword"
import styled from "@emotion/styled"

export default () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const { getSession } = useContext(AccountContext)

  useEffect(() => {
    getSession(function (err, session) {
      if (err) {
        console.error(err)
        return
      }
      console.log("Session", session)
      setLoggedIn(true)
    })
  }, [])

  return (
    <div>
      {loggedIn && (
        <>
          <h1>Settings</h1>
          <ChangePassword />
        </>
      )}
    </div>
  )
}
