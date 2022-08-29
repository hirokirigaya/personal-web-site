import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Header } from './components/layout/Header'
import { Home } from './pages/Home'
import GlobalStyles from './styles/GlobalStyles'
import { theme } from './styles/variables'
function App() {
  return (

    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
