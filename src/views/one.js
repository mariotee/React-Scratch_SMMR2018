import React, { Component } from 'react';

import { Grid, Typography } from '@material-ui/core';

import AppLayout from 'layout';
import ColorCard from 'components/ColorCard';

export default class One extends Component {
  render() {
    return (
      <AppLayout title="One">
        <Grid container spacing={24}>
          <Grid item xs={12} md={6}>
            <ColorCard title="Page One">
              <Typography>{'Hello World!'}</Typography>
            </ColorCard>
          </Grid>
        </Grid>
      </AppLayout>
    );
  }
}
