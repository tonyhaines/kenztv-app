import { CognitoUserPool } from "amazon-cognito-identity-js"

const poolData = {
  UserPoolId: "eu-west-1_ly8L3WPFS",
  ClientId: "5nirn8ja48lah1jtoaemfban5p",
}

export default new CognitoUserPool(poolData)
