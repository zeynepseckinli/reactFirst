import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, Grid } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import Router from './routes';

function App() {
  return (
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
  );
}

export default App;