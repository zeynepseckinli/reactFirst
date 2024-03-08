import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  Divider,
  Grid,
  TextField,
  Typography,
} from '@mui/material';

export default function Home() {

    return (
        <Card sx={{ width: '100%', height: '100%', borderRadius: '1rem' }}>
          <CardContent>
            <Grid container spacing={2}>
              
            <Grid item xs={6}>
              <h2>home yeni gridli Page</h2>
              </Grid>
              <Grid item xs={6}>
              <h2>home yeni gridli Page</h2>
              </Grid>
              <Grid item xs={6}>
              <h2>home yeni gridli Page</h2>
              </Grid>
              <Grid item xs={6}>
              <h2>home yeni gridli Page</h2>
              </Grid>
              <Grid item xs={6}>
              <h2>home yeni gridli Page</h2>
              </Grid>
              <Grid item xs={6}>
              <h2>home yeni gridli Page</h2>
              </Grid>
              <Grid item xs={6}>
              <h2>home yeni gridli Page</h2>
              </Grid>
              <Grid item xs={6}>
              <h2>home yeni gridli Page</h2>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      );
}
