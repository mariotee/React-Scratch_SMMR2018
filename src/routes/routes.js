import React from 'react'

import HomePage from "screens/home.js"
import OnePage from "screens/one.js"
import TwoPage from "screens/two.js"

import
{ Dashboard, AccountCircle, Favorite, Grade, Help }
from "@material-ui/icons"

export default
[
  {
    path: "/",
    name: "Home",
    component: HomePage,
    icon: Dashboard
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: TwoPage,
    icon: Favorite
  },
  {
    path: "/stars",
    name: "Stars",
    component: TwoPage,
    icon: Grade
  },
  {
    path: "/account",
    name: "Account",
    component: TwoPage,
    icon: AccountCircle
  },
  {
    path: "/help",
    name: "Help",
    component: TwoPage,
    icon: Help
  }
]
