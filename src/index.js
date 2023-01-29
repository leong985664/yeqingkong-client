import './index.css';

import React from 'react';

import ReactDOM from 'react-dom/client';

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';
import {
  createTheme,
  ThemeProvider,
} from '@mui/material';

import App from './App';
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  uri: "https://graphql.contentful.com/content/v1/spaces/lulclwb7b150",
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer 0ZNI183dYDqOhwz6Lw2WMYsqY1FDmfIq1SVAGd5zMSM`
  }
})

const theme = createTheme({
  palette: {
    neutral: {
      main: '#64748B',
      contrastText: '#ffffff',
    },
    published: {
      main: 'rgb(205, 243, 198)',
      contrastText: 'rgb(0, 109, 35)',
    },
    forthcoming: {
      main: 'rgb(255, 224, 224)',
      contrastText: 'rgb(189, 0, 42)',
    },
    "under revision": {
      main: 'rgb(253, 229, 192)',
      contrastText: 'rgb(177, 45, 0)',
    },
    "under development": {
      main: 'rgb(231, 235, 238)',
      contrastText: 'rgb(65, 77, 99)',
    },
    undergraduate: {
      main: '#bbdefb',
      contrastText: '#1976d2',
    },
    graduate: {
      main: '#d1c4e9',
      contrastText: '#512da8'
    }
  },
  typography: {
    h4: {
      fontSize: 22,
      fontWeight: 500,
    },
    h5: {
      fontSize: 20,
      fontWeight: 500,
    },
    h6: {
      fontSize: 18,
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: 18,
    },
    subtitle2: {
      fontSize: 16,
      fontWeight: 500,
    },
    subtitle3: {
      fontSize: 14,
      fontWeight: 500,
    },
    body: {
      fontSize: 18,
    },
    body2: {
      fontSize: 16,
    },
    body3: {
      fontSize: 14,
    },
    caption: {
      fontSize: 14,
      fontStyle: "italic",
    },
    button: {
      fontSize: 16,
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
