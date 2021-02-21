import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import axios from "axios"

import WeatherCard from "./components/WeatherCard/component"
import { isElementOfType } from "react-dom/test-utils"
import Toolbar from "./components/Toolbar/Toolbar"
import SideDrawer from "./components/SideDrawer/SideDrawer"
import Backdrop from "./components/Backdrop/Backdrop"
import Home from "./components/MainContentArea/Home"
import Products from "./components/MainContentArea/Products"
import UsersTable from "./components/MainContentArea/UsersTable"
import LogOut from "./components/MainContentArea/Log_out"
import Signup from "./components/Authentication/SignUp"
import Login from "./components/Authentication/Login"
import { Account } from "./components/Authentication/Accounts"
import Status from "./components/Authentication/Status"
import Settings from "./components/Settings/Settings"

function App() {
  // Tootlbar and side bar setup

  const toolBarHeight = "50px"

  let toolBarItems = {
    logo: "KenzTV",
    navItemList: [
      { reference: "/", name: "Home" },
      { reference: "/Log-Out", name: "Log Out" },
    ],
  }

  let sideBarItemList = [
    { reference: "/Products", name: "Products" },
    { reference: "/Users", name: "Users" },
  ]

  const App = styled.div`
    margin: 0 auto;
    color: white;
    height: 100%;
  `
  // Tootlbar and side bar functionality

  const [sideBar, setSideBar] = useState(false)
  const [sideDrawerTemp, setSideDrawerTemp] = useState(null)
  const [backDropTemp, setBackDropTemp] = useState(null)

  const drawerToggleClickHandler = () => {
    setSideBar(!sideBar)
  }

  const [userList, setUserList] = useState([])

  const requestOptions = {
    method: "get",
    url: "https://j1e3j8uqpd.execute-api.eu-west-1.amazonaws.com/dev/get-user/8912",
    // data: params,
  }

  const data = async () => {
    const apiResult = await axios(requestOptions)
    const result = await apiResult
    return result
  }

  const getUserList = () => {
    data().then(res => {
      if (200 === res.status) {
        console.log(res.data)
        setUserList(res.data)
      } else if (400 === res.status) {
        console.log(res.data)
      }
    })
  }

  useEffect(() => {
    getUserList()
  }, [])

  return (
    // <p>Site Under Development poop 25</p>
    <Account>
      <Status />
      <Signup />
      <Login />
      <Settings />
    </Account>

    // <Router>
    //   <App>
    //     {sideBar ? <Backdrop click={drawerToggleClickHandler} /> : <div></div>}
    //     <Switch>
    //       <Route exact path="/Log-Out">
    //         <LogOut />
    //       </Route>
    //       <Route exact path="/">
    //         <Toolbar
    //           toolBarItems={toolBarItems}
    //           toolBarHeight={toolBarHeight}
    //           drawerToggleClickHandler={drawerToggleClickHandler}
    //         />
    //         <SideDrawer show={sideBar} click={drawerToggleClickHandler} sideBarItemList={sideBarItemList} />
    //         <Home toolBarHeight={toolBarHeight} />
    //       </Route>
    //       <Route exact path="/Products">
    //         <Toolbar
    //           toolBarItems={toolBarItems}
    //           toolBarHeight={toolBarHeight}
    //           drawerToggleClickHandler={drawerToggleClickHandler}
    //         />
    //         <SideDrawer show={sideBar} click={drawerToggleClickHandler} sideBarItemList={sideBarItemList} />
    //         <Products toolBarHeight={toolBarHeight} />
    //       </Route>
    //       <Route exact path="/Users">
    //         <Toolbar
    //           toolBarItems={toolBarItems}
    //           toolBarHeight={toolBarHeight}
    //           drawerToggleClickHandler={drawerToggleClickHandler}
    //         />
    //         <SideDrawer show={sideBar} click={drawerToggleClickHandler} sideBarItemList={sideBarItemList} />
    //         <UsersTable toolBarHeight={toolBarHeight} userList={userList} />
    //       </Route>
    //     </Switch>
    //   </App>
    // </Router>
  )
}

export default App
