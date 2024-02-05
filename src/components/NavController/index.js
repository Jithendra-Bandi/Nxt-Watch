import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {FaFireAlt} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {
  LeftContainer,
  LeftLinks,
  Row,
  LinksPara,
  LeftContent,
  LeftContentImage,
  ContentPara,
} from './styledComponents'
import AppContext from '../../context/AppContext'

const NavController = props => {
  const {match, deactivate} = props
  let {path} = match
  if (deactivate) path = ''
  console.log(path)
  return (
    <AppContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <LeftContainer isDark={isDark}>
            <li className="li">
              <LeftLinks>
                <Link to="/" className="nav-link">
                  <Row isDark={isDark} active={path === '/'}>
                    <AiFillHome />
                    <LinksPara isDark={isDark} active={path === '/'}>
                      Home
                    </LinksPara>
                  </Row>
                </Link>
                <Link to="/trending" className="nav-link">
                  <Row isDark={isDark} active={path === '/trending'}>
                    <FaFireAlt />
                    <LinksPara isDark={isDark} active={path === '/trending'}>
                      Trending
                    </LinksPara>
                  </Row>
                </Link>
                <Link to="/gaming" className="nav-link">
                  <Row isDark={isDark} active={path === '/gaming'}>
                    <SiYoutubegaming />
                    <LinksPara isDark={isDark} active={path === '/gaming'}>
                      Gaming
                    </LinksPara>
                  </Row>
                </Link>
                <Link to="/saved-videos" className="nav-link">
                  <Row isDark={isDark} active={path === '/saved-videos'}>
                    <MdPlaylistAdd />
                    <LinksPara
                      isDark={isDark}
                      active={path === '/saved-videos'}
                    >
                      Saved videos
                    </LinksPara>
                  </Row>
                </Link>
              </LeftLinks>
            </li>
            <li className="li">
              <LeftContent>
                <ContentPara isDark={isDark}>CONTACT US</ContentPara>
                <Row>
                  <LeftContentImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <LeftContentImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <LeftContentImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </Row>
                <ContentPara isDark={isDark}>
                  Enjoy! Now to see your channels and recommendations!
                </ContentPara>
              </LeftContent>
            </li>
          </LeftContainer>
        )
      }}
    </AppContext.Consumer>
  )
}

export default withRouter(NavController)
