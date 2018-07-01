import React, { Component } from 'react'

import { Grid, Paper, Divider, Typography, Button } from '@material-ui/core'

import AppLayout from "layout"

export default class Home extends Component
{
  render()
  {
    return (
      <AppLayout title="Home">
        <Grid container spacing={24}>
          <Grid item>
            <Paper style={{width: 500,height: 500}}>
              <Typography >{"Some Paper"}</Typography>
              <Divider/><Divider/><Divider/>
              <Button variant="contained">{"Click Me"}</Button>
            </Paper>
          </Grid>
        </Grid>
      </AppLayout>
    )
  }
}
