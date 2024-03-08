import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { Divider, Grid } from '@mui/material';
import PageBox from '../components/PageBox';

export default function CardLayout() {
  return (
    <PageBox props={{ flexDirection: 'row' }}>
      <Grid container spacing={0}>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          <Outlet />
        </Grid>
      </Grid>
    </PageBox>
  );
}
