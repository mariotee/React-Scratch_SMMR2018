import React from 'react'

import { Button } from '@material-ui/core'
import { Checkbox } from '@material-ui/core'

import HomePage from "screens/home.js"
import OnePage from "screens/one.js"
import TwoPage from "screens/two.js"

import
{
  Dashboard,
  ContentPaste,
  LibraryBooks,
  Tv,
  Loop
} from "@material-ui/icons"

const routes =
[
  {
    path: "/",
    name: "Home",
    component: HomePage,
    icon: Dashboard
  },
  {
    path: "/one",
    name: "One",
    component: OnePage,
    icon: ContentPaste
  },
  {
    path: "/two",
    name: "Two",
    component: TwoPage,
    icon: Tv
  }
];

export default routes;
