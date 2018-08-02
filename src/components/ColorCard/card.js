import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardContent, Divider, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import style from './style.js';

ColorCard.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  titleColor: PropTypes.string,
  body: PropTypes.string,
};

function ColorCard({ ...props }) {
  const { classes } = props;

  return (
    <Card>
      <CardContent className={classes.cardTitle}>
        <Typography variant="headline" color="inherit">{props.title}</Typography>
      </CardContent>
      <Divider/>
      <CardContent>
        {props.children}
      </CardContent>
    </Card>
  );
}

export default withStyles(style)(ColorCard);
