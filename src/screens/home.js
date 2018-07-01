import React, { Component } from 'react'

import { Grid, Card, CardContent, Divider, Typography, Button } from '@material-ui/core'

import AppLayout from "layout"

import ColorCard from "components/cards/ColorCard"

export default class Home extends Component
{
  render()
  {
    return (
      <AppLayout title="Home">
        <Grid container spacing={24}>
          <Grid item xs={12} md={6}>
            <ColorCard title="ayy lmao">
              <Button variant="contained" color="primary">{"Red Pill"}</Button>
              <Button variant="text" color="secondary">{"Blue Pill"}</Button>
            </ColorCard>
          </Grid>
        </Grid>
      </AppLayout>
    )
  }
}
