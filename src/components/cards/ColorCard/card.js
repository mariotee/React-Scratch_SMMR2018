import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardContent, Divider, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import style from './style.js';

ColorCard.propTypes = {
  title: PropTypes.string,
  titleColor: PropTypes.string,
  body: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

function ColorCard({ ...props }) {
  const { classes } = props;

  return (
    <Card>
      <CardContent className={classes.cardTitle} style={{ backgroundColor: props.titleColor }}>
        <Typography variant="headline">{props.title}</Typography>
      </CardContent>
      <Divider/>
      <CardContent style={{
height: props.height, width: props.height,
}}>
        {props.children}
      </CardContent>
    </Card>
  );
}

export default withStyles(style)(ColorCard);
