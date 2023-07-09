import './App.css';
import React from 'react';
import { ThemeProvider, CssBaseline } from "@mui/material";
import { darkTheme } from './theme/theme';
import { Routes } from './routes';
import {
  QueryClient,
  QueryClientProvider
} from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <body>
            <Routes />
          </body>
        </ThemeProvider>
      </QueryClientProvider>
    </html>
  );
}

export default App;
