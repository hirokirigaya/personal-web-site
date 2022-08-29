import { Navbar } from './Navbar';
import * as Styled from './styles'

const Header = () : JSX.Element => {
  return (
    <Styled.Container>
      <Navbar />
    </Styled.Container>
  )
}

export { Header };