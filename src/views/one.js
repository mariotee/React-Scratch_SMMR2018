import React, { Component } from 'react';

import { Grid, Typography } from '@material-ui/core';

import AppLayout from 'layout';
import ColorCard from 'components/ColorCard';

export default class One extends Component {
  render() {
    return (
      <AppLayout title="One">
        <Grid container spacing={24}>
          <Grid item md={2}>
          </Grid>
          <Grid item xs={12} md={8}>
            <ColorCard title="Page One">
              <Typography>{'Hello World!'}</Typography>
            </ColorCard>
          </Grid>
          <Grid item md={2}>
          </Grid>
        </Grid>
      </AppLayout>
    );
  }
}
