import { useRoutes } from 'react-router-dom';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Education from './pages/education/Education';
import Experience from './pages/experience/Experience';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import CardLayout from './layouts/CardLayout';
import './index.css';
import { Grid } from '@mui/material';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: (
        <Grid container>
          <Grid item xs={12}>
            <CardLayout />
          </Grid>
        </Grid>
      ),
      children: [
        { path: '/about', element: <About /> },
        { path: '/contact', element: <Contact /> },
        { path: '/education', element: <Education /> },
        { path: '/experience', element: <Experience /> },
        { path: '/home', element: <Home /> },
        { path: '/projects', element: <Projects /> },
      ],
    },
  ]);
}
