import React, { Component } from 'react';

import { Grid, Typography } from '@material-ui/core';

import AppLayout from 'layout';

import ColorCard from 'components/ColorCard';

export default class Home extends Component {
  render() {
    return (
      <AppLayout title="Home">
        <Grid container spacing={24}>
          <Grid item xs={12} md={6}>
            <ColorCard title="This is a card from Material UI">
              <Typography variant="body2">
                {`This app was made using React, Webpack, and Babel with Material UI`}<br/>
                {`The purpose was to learn how something like the 'create-react-app' package
                works under the hood.  There is limited functionality because it is just a layout`}
              </Typography>
            </ColorCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <ColorCard title="package.json">
              <Typography variant="body2">
                {'Dev Dependencies: '}<br/>
                {'babel-core: ^6.26.3,'}<br/>
                {'babel-eslint: ^8.2.6, '}<br/>
                {'babel-loader: ^7.1.5,'}<br/> 
                {'babel-plugin-transform-object-rest-spread: ^6.26.0,'}<br/>
                {'babel-preset-env: ^1.7.0,'}<br/>
                {'babel-preset-react: ^6.24.1, '}<br/>
                {'css-loader: ^0.28.11, '}<br/>
                {'eslint: ^5.2.0,'}<br/>
                {'eslint-plugin-react: ^7.10.0,'}<br/>
                {'gh-pages: ^1.2.0,'}<br/>
                {'html-webpack-plugin: ^3.2.0,'}<br/>
                {'style-loader: ^0.21.0,'}<br/>
                {'webpack: ^4.16.1, '}<br/>
                {'webpack-cli: ^3.1.0,'}<br/>
                {'webpack-dev-server: ^3.1.4'}
              </Typography>
            </ColorCard>
          </Grid>
        </Grid>
      </AppLayout>
    );
  }
}