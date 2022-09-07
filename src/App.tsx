import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { Page404 } from './pages/404'
import { Blog } from './pages/Blog'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
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
          <Route path="/projetos" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
