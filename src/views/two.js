import React, { Component } from 'react';

import { Grid, Typography } from '@material-ui/core';

import AppLayout from 'layout';
import ColorCard from 'components/cards/ColorCard';

export default class Two extends Component {
  render() {
    return (
      <AppLayout title="Two">
        <Grid container spacing={24}>
          <Grid item xs={12} md={6}>
            <ColorCard title="making a #2">
              <Typography>{'this could take a while...'}</Typography>
            </ColorCard>
          </Grid>
        </Grid>
      </AppLayout>
    );
  }
}
