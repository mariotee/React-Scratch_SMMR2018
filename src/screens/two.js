import React, { Component } from 'react'

import { Grid, Paper, Typography, Button } from '@material-ui/core'

import AppLayout from "layout"

export default class Two extends Component
{
  render()
  {
    return (
      <AppLayout title="Two">
        <Grid container spacing={24}>
          <Grid item>
            <Paper style={{width: 500,height: 500}}>
              <Typography >{"Making a #2"}</Typography>
              <Typography >{"Might take a while"}</Typography>
            </Paper>
          </Grid>
        </Grid>
      </AppLayout>
    )
  }
}
