import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material'

import Layout from './components/Layout'
import { routes } from './routes'
import { myTheme } from './theme'

export default function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const theme = React.useMemo(() => myTheme(prefersDarkMode ? 'dark' : 'light'), [prefersDarkMode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Layout>
          <Routes>
            {routes.map((route) => (
              <Route key={route.label} path={route.path} element={<route.element />} />
            ))}
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  )
}
