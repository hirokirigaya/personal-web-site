import { FiArrowUp } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { BackTop } from '../../reusable/BackTop';
import * as Styled from './styles'

const Footer = (): JSX.Element => {
  return (
    <Styled.Container>
      <div className='content-footer' id='contato'>
        <div className='contact'>
          <p>Gostou do meu trabalho?
            <br />
            <span>Vamos conversar!</span>
          </p>

          <a href="mailto:danielferreiradeveloper@gmail.com">danielferreiradeveloper@gmail.com</a>
        </div>
        <Styled.Navigation>
          <ul>
            <li>
              <p>Redes</p>
            </li>
            {links.map((item) => item.indenty === "networks" && (

              <li key={item.id}>
                <a href={item.path} target="_blank">{item.name}</a>
              </li>
            )
            )}
          </ul>
          <ul>
            <li>
              <p>Navegar</p>
            </li>
            {links.map((item) => item.indenty === "navigation" && (

              <li key={item.id}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            )
            )}
          </ul>
        </Styled.Navigation>
        <BackTop />
      </div>
      <p className='copyright'>All Copyrights © {new Date().getFullYear()} Daniel Ferreira</p>
    </Styled.Container>
  )
}


const links = [
  {
    id: 1,
    name: 'Home',
    path: '/',
    indenty: 'navigation'
  },
  {
    id: 2,
    name: 'Projetos',
    path: '/projetos',
    indenty: 'navigation'
  },
  {
    id: 3,
    name: 'Blog',
    path: '/blog',
    indenty: 'navigation'
  },
  {
    id: 4,
    name: 'Github',
    path: 'https://github.com/hirokirigaya',
    indenty: 'networks'
  },
  {
    id: 5,
    name: 'Linkedin',
    path: 'https://www.linkedin.com/in/daniel-junio-0832481bb/',
    indenty: 'networks'
  },
  {
    id: 6,
    name: 'Youtube',
    path: 'https://www.youtube.com/channel/UCGanhUB_aetD16UBbUJ9n6g',
    indenty: 'networks'
  }
]

export { Footer };