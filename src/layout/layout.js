import React from 'react'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { AppBar, Drawer, Toolbar } from '@material-ui/core'
import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core'
import style from "./style.js"

import routes from "routes"

Layout.propTypes =
{
  appTitle: PropTypes.string,
  title: PropTypes.string,
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
            {props.appTitle}
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.body}>
        <Drawer
          variant="permanent"
          classes={{ paper: classes.drawerPaper }}
        >
          <div className={classes.toolbar}/>
          <List component="nav">
          {
            routes.map( ( element, index ) =>
            {
              return(
                <ListItem key={index} className={classes.navItem} button>
                  <NavLink
                    to={element.path}
                    className={classnames({
                      [classes.navLink]: true,
                      [classes.navActive]: props.location.pathname === element.path
                    })}
                    >
                    <ListItemIcon className={classes.navIcon}>
                      <element.icon/>
                    </ListItemIcon>
                    <ListItemText
                      disableTypography
                      className={classnames({
                        [classes.navText]: true,
                        [classes.navActive]: props.location.pathname === element.path
                      })}
                      primary={element.name}
                    />
                  </NavLink>
                </ListItem>
              )
            })
          }
          </List>
        </Drawer>
        <div className={classes.toolbar}/>
        <div className={classes.content}>
          <Typography className={classes.header} variant="display1">{props.title}</Typography>
          {props.children}
        </div>
      </main>
    </div>
  )
}

const styled = withStyles(style)(Layout);

export default withRouter(styled)
