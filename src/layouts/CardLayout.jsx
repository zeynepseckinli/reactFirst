import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { Divider, Grid } from '@mui/material';
import PageBox from '../components/PageBox';

export default function CardLayout() {
  return (
    <div style={{ backgroundColor: 'lightgrey', minHeight: '100vh', padding: '30px', margin: 0, paddingLeft: 0, paddingRight: 0 }}> {/* Margin ve padding değerlerini sıfırlıyoruz */}
      <PageBox props={{ flexDirection: 'row' }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={9}>
            <Outlet />
          </Grid>
        </Grid>
      </PageBox>
    </div>
  );
}
