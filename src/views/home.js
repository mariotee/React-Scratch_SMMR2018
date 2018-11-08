import React, { Component } from 'react';

import { Grid, Typography } from '@material-ui/core';

import AppLayout from 'layout';

import ColorCard from 'components/ColorCard';

export default class Home extends Component {
  render() {
    return (
      <AppLayout title="Home">
        <Grid container spacing={24}>
          <Grid item md={3}>
          </Grid>
          <Grid item xs={12} md={6}>
            <ColorCard title="This is an edited card from Material UI">
              <Typography variant="body2">
                {`This app was made using React, Webpack, and Babel with Material UI`}<br/>
                {`The purpose was to learn how something like the 'create-react-app' package
                works under the hood.  There is limited functionality because it is just a layout`}
              </Typography>
            </ColorCard>
          </Grid>
          <Grid item md={3}>
          </Grid>
        </Grid>
      </AppLayout>
    );
  }
}