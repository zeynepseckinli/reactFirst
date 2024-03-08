import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  Divider,
  Grid,
  TextField,
  Typography,
} from '@mui/material';

export default function About() {

    return (
        <Card sx={{ width: '100%', height: '100%', borderRadius: '1rem' }}>
          <CardContent>
            <Grid container spacing={2}>
            <Grid item xs={12}>
              <h2 style={{ width: '100%', overflowWrap: 'break-word' }}>About yeni gridli Page</h2>
            </Grid>
            </Grid>
          </CardContent>
        </Card>
      );
}
