import React from 'react'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { AppBar, Drawer, Toolbar } from '@material-ui/core/'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core/'
import { Typography, Button, Divider } from '@material-ui/core/'
import { withStyles } from '@material-ui/core/styles'
import style from "./style.js"

import routes from "routes"

Layout.propTypes =
{
  classes: PropTypes.object.isRequired,
}

function Layout(props)
{
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap>
            {"App"}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.toolbar}/>
        <List component="nav">
        {
          routes.map( ( element, index ) =>
          {
            const navLinkClasses = classes.navLink + " " + classnames({[classes.navActive]: props.location.pathname === element.path});

            return(
              <ListItem key={index} className={classes.navItem} button>
                <NavLink to={element.path} className={navLinkClasses}>
                  <ListItemIcon className={classes.navIcon}>
                    <element.icon/>
                  </ListItemIcon>
                  <ListItemText className={classes.navText}
                    primary={element.name}
                  />
                </NavLink>
              </ListItem>
            )
          })
        }
        </List>
      </Drawer>
      <main className={classes.body}>
        <div className={classes.toolbar}/>
        <div className={classes.content}>
          <Typography className={classes.header} variant="display2">{props.title}</Typography>
          {props.children}
        </div>
      </main>
    </div>
  )
}

const styled = withStyles(style)(Layout);

export default withRouter(styled)
