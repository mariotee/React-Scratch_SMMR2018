import React, { Component } from 'react'

import { Grid, Typography, Button } from '@material-ui/core'

import AppLayout from "layout"
import ColorCard from "components/cards/ColorCard"

export default class One extends Component
{
  render()
  {
    return (
      <AppLayout title="One">
        <Grid container spacing={24}>
          <Grid item xs={12} md={6}>
            <ColorCard title="page one">
              <Typography>{"Hello"}</Typography>
            </ColorCard>
          </Grid>
        </Grid>
      </AppLayout>
    )
  }
}
