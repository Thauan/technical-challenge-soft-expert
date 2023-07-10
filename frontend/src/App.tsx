import './App.css';
import React from 'react';
import { ThemeProvider, CssBaseline } from "@mui/material";
import { darkTheme } from './theme/theme';
import { Routes } from './routes';
import {
  QueryClient,
  QueryClientProvider
} from 'react-query';
import { Provider } from 'react-redux'
import store from './store'

const queryClient = new QueryClient();

function App() {
  return (
    <html lang="en">
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <body>
              <Routes />
            </body>
          </ThemeProvider>
        </QueryClientProvider>
      </Provider>
    </html>
  );
}

export default App;
