import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './index.css';
// import { ThemeProvider, createTheme, CssBaseline } from '@material-ui/core';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
// routes
import { AppRoutes } from './routes';

// import layouts
const DashboardLayout = lazy(() => import('./layouts/DashboardLayout'));

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Poppins'
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Suspense fallback={<></>}>
          <Switch>
            {AppRoutes.map((route) => {
              const { component: Component, path, exact } = route;
              return (
                <Route
                  key={path}
                  path={path}
                  exact={exact}
                  render={(props) => {
                    return (
                      <DashboardLayout>
                        <Component {...props} />
                      </DashboardLayout>
                    );
                  }}
                />
              );
            })}

            <Redirect from="*" to="/error-404" />
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
