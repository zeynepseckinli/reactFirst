import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, Grid } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import Router from './routes';

function App() {
  return (
    <div style={{ backgroundColor: 'lightgrey', minHeight: '100vh' }}> {/* Arka plan rengini gri yapmak için stil ekledik */}
      <BrowserRouter>
        <CssBaseline />
        <Grid
          container
          justifyContent="center"
          style={{ maxWidth: 1320, margin: '0 auto' }}>
          <Router />
          <ToastContainer position="bottom-right" />
        </Grid>
      </BrowserRouter>
    </div>
  );
}

export default App;
