import React, { Component } from 'react'

import { Grid, Paper, Typography, Button } from '@material-ui/core'

import AppLayout from "layout"

export default class One extends Component
{
  render()
  {
    return (
      <AppLayout title="One">
        <Grid container spacing={24}>
          <Grid item>
            <Paper style={{width: 500,height: 500}}>
              <Typography >{"Some More Paper"}</Typography>
              <Typography >{"Hello!"}</Typography>
            </Paper>
          </Grid>
        </Grid>
      </AppLayout>
    )
  }
}
