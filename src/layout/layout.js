import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button"
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import routes from "routes"
import { NavLink } from 'react-router-dom';
import classnames from 'classnames'

import style from "./style.js"

function Layout(props)
{
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap>
            App Layout
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List component="nav">
        {
          routes.map( ( element, index ) =>
          {
            const active =  window.location.pathname === element.path;
            const navLinkClasses = classes.navLink + " " +classnames({[classes.activeColor]: active});

            return(
              <ListItem key={index} className={classes.navItem} button>
                <NavLink to={element.path} className={navLinkClasses}>
                  <ListItemIcon className={classes.navIcon}><element.icon/></ListItemIcon>
                  <ListItemText primary={element.name} className={classes.navText}/>
                </NavLink>
              </ListItem>
            )
          })
        }
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Typography variant="display2">{props.title}</Typography>
        {props.children}
      </main>
    </div>
  )
}

Layout.propTypes =
{
  classes: PropTypes.object.isRequired,
}

export default withStyles(style)(withRouter(Layout))
