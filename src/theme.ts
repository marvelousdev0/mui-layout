import { createTheme, responsiveFontSizes } from '@mui/material'

export const myTheme = (mode: 'dark' | 'light') => {
  let theme = createTheme({
    typography: {
      fontFamily: [
        'IBM Plex Sans',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(','),
      h1: { fontFamily: "'Plus Jakarta Sans', sans-serif" },
      h2: { fontFamily: "'Plus Jakarta Sans', sans-serif" },
      h3: { fontFamily: "'Plus Jakarta Sans', sans-serif" },
      h4: { fontFamily: "'Plus Jakarta Sans', sans-serif" },
      h5: { fontFamily: "'Plus Jakarta Sans', sans-serif" },
      h6: { fontFamily: "'Plus Jakarta Sans', sans-serif" },
      button: { fontFamily: "'Plus Jakarta Sans', sans-serif" }
    },
    palette: {
      mode
    }
  })

  theme = responsiveFontSizes(theme)

  return theme
}
