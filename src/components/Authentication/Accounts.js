import React, { createContext } from "react"
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js"
import Pool from "./AwsUserPool"

const AccountContext = createContext()

const Account = props => {
  const getSession = async callback => {
    await new Promise((resolve, reject) => {
      const user = Pool.getCurrentUser()
      if (user) {
        user.getSession((err, session) => {
          if (err) {
            // reject()
            if (callback) {
              callback(err)
            }
          } else {
            // resolve(session)
            // resolve("Tony Said This")

            user.getUserAttributes((err, attributes) => {
              if (err) {
                if (callback) {
                  callback(err)
                }
              } else if (attributes) {
                if (callback) {
                  const results = {}
                  for (let attribute of attributes) {
                    const { Name, Value } = attribute
                    results[Name] = Value
                  }
                  callback(null, { user, ...session, ...results })
                }
              }
              return
            })
          }
        })
      } else {
        reject()
      }
    })
  }

  const authenticate = async (Username, Password, callback) => {
    await new Promise((resolve, reject) => {
      const user = new CognitoUser({
        Username,
        Pool,
      })

      const authDetails = new AuthenticationDetails({
        Username,
        Password,
      })

      user.authenticateUser(authDetails, {
        onSuccess: data => {
          // console.log("onSuccess", data)
          // resolve("data")
          if (callback) {
            callback(null, data)
          }
        },

        onFailure: err => {
          // console.error("onFailure", err)
          // reject(err)
          if (callback) {
            callback(err)
          }
        },

        newPasswordRequired: data => {
          // console.log("newPasswordRequired", data)
          // resolve(data)
          if (callback) {
            callback(null, data)
          }
        },
      })
    })
  }

  const logout = () => {
    const user = Pool.getCurrentUser()
    if (user) {
      user.signOut()
    }
  }

  return (
    <AccountContext.Provider value={{ authenticate, getSession, logout }}>{props.children}</AccountContext.Provider>
  )
}

export { Account, AccountContext }
