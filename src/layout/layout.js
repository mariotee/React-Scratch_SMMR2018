import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { AppBar, Toolbar } from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import style from './style.js';

import routes from 'routes';

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

function Layout({ ...props }) {
  const { classes } = props;  

  return <div className={classes.root}>
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Typography color="inherit" variant="title" noWrap>
          {'React Scratch w/ Material UI'}
        </Typography>
      </Toolbar>
    </AppBar>
    <main className={classes.body}>
    <div className={classes.toolbar}/>
      <List className={classes.listRoot}>
      {
        routes.map((element, index) => {
          return <ListItem
            key={index}
            className={classnames({
              [classes.navItem]: true,
              [classes.navActive]: props.location.pathname === element.path,
            })}
            button
          >
            <NavLink to={element.path} className={classes.navLink}>
              <ListItemIcon className={classes.navIcon}>
                <element.icon/>
              </ListItemIcon>
              <ListItemText
                disableTypography
                className={classnames({
                  [classes.navText]: true,
                  [classes.navActive]: props.location.pathname === element.path,
                })}
                primary={element.name}
              />
            </NavLink>
          </ListItem>;
        })
      }
      </List>
      <div className={classes.content}>
        <Typography 
          className={classes.header} 
          color="primary" 
          variant="display1"
        >
          {props.title}
        </Typography>
        {props.children}
      </div>
    </main>
  </div>;
}

const styled = withStyles(style)(Layout);

export default withRouter(styled);
