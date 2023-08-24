import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from './styles/themes/default'
import { Router } from './Router'
import { BlogProvider } from './contexts/BlogContext'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <BlogProvider>
          <Router />
        </BlogProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
