import React from 'react'

import HomePage from "screens/home.js"
import OnePage from "screens/one.js"
import TwoPage from "screens/two.js"

import
{ Home, AccountCircle, Help }
from "@material-ui/icons"

export default
[
  {
    path: "/",
    name: "Home",
    component: HomePage,
    icon: Home
  },
  {
    path: "/account",
    name: "Account",
    component: OnePage,
    icon: AccountCircle
  },
  {
    path: "/help",
    name: "Help",
    component: TwoPage,
    icon: Help
  }
]
