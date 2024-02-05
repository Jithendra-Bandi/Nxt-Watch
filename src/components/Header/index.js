import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {FaMoon, FaFireAlt} from 'react-icons/fa'
import {FiMenu, FiLogOut} from 'react-icons/fi'
import {IoIosSunny, IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {
  Nav,
  Logo,
  SmallRow,
  IconButton,
  LargeRow,
  ProfileImage,
  LogoutButton,
  Para,
  RowBetween,
  CancelButton,
  ConfirmButton,
  MenuPopupContainer,
  CrossContainer,
  CrossButton,
  LeftLinks,
  Row,
  LinksPara,
} from './styledComponents'
import AppContext from '../../context/AppContext'

const Header = props => (
  <AppContext.Consumer>
    {value => {
      const {isDark, onChangeTheme} = value
      const popupStyling = isDark ? 'darkStyle' : 'lightStyle'
      const popupMenuLight = {backgroundColor: 'white'}
      const popupMenuDark = {backgroundColor: '#181818'}
      const popupBackgroundStyle = isDark ? popupMenuDark : popupMenuLight
      const popupLogoutStyle = {backgroundColor: '#90909033'}
      const onLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }
      const {match} = props
      const {path} = match
      const logoutPopup = close => (
        <>
          <Para isDark={isDark}>Are you sure, you want to logout?</Para>
          <RowBetween>
            <CancelButton type="button" onClick={() => close()}>
              Cancel
            </CancelButton>
            <ConfirmButton type="button" onClick={onLogout}>
              Confirm
            </ConfirmButton>
          </RowBetween>
        </>
      )
      return (
        <Nav isDark={isDark}>
          <Link to="/">
            {isDark && (
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                alt="website logo"
              />
            )}
            {!isDark && (
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="website logo"
              />
            )}
          </Link>
          <SmallRow>
            <li className="li">
              {isDark && (
                <IconButton
                  data-testid="theme"
                  type="button"
                  onClick={() => onChangeTheme()}
                  isDark={isDark}
                >
                  <IoIosSunny />
                </IconButton>
              )}
              {!isDark && (
                <IconButton
                  isDark={isDark}
                  type="button"
                  data-testid="theme"
                  onClick={() => onChangeTheme()}
                >
                  <FaMoon />
                </IconButton>
              )}
            </li>

            <li className="li">
              <Popup
                className="popup-content"
                modal
                overlayStyle={popupBackgroundStyle}
                trigger={
                  <IconButton isDark={isDark} type="button">
                    <FiMenu />
                  </IconButton>
                }
              >
                {close => (
                  <MenuPopupContainer>
                    <CrossContainer>
                      <CrossButton
                        isDark={isDark}
                        type="button"
                        onClick={() => close()}
                      >
                        <IoMdClose className="icon" />
                      </CrossButton>
                    </CrossContainer>
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
                          <LinksPara
                            isDark={isDark}
                            active={path === '/trending'}
                          >
                            Trending
                          </LinksPara>
                        </Row>
                      </Link>
                      <Link to="/gaming" className="nav-link">
                        <Row isDark={isDark} active={path === '/gaming'}>
                          <SiYoutubegaming />
                          <LinksPara
                            isDark={isDark}
                            active={path === '/gaming'}
                          >
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
                  </MenuPopupContainer>
                )}
              </Popup>
            </li>

            <li className="li">
              <Popup
                className={`popup-content ${popupStyling}`}
                modal
                overlayStyle={popupLogoutStyle}
                trigger={
                  <IconButton isDark={isDark} type="button">
                    <FiLogOut />
                  </IconButton>
                }
              >
                {close => logoutPopup(close)}
              </Popup>
            </li>
          </SmallRow>
          <LargeRow>
            <li className="li">
              {isDark && (
                <IconButton
                  type="button"
                  data-testid="theme"
                  onClick={() => onChangeTheme()}
                  isDark={isDark}
                >
                  <IoIosSunny className="icon" />
                </IconButton>
              )}
              {!isDark && (
                <IconButton
                  type="button"
                  data-testid="theme"
                  onClick={() => onChangeTheme()}
                  isDark={isDark}
                >
                  <FaMoon className="icon" />
                </IconButton>
              )}
            </li>

            <li className="li">
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </li>

            <li className="li">
              <Popup
                className={`popup-content ${popupStyling}`}
                modal
                overlayStyle={popupLogoutStyle}
                trigger={
                  <LogoutButton isDark={isDark} type="button">
                    Logout
                  </LogoutButton>
                }
              >
                {close => logoutPopup(close)}
              </Popup>
            </li>
          </LargeRow>
        </Nav>
      )
    }}
  </AppContext.Consumer>
)

export default withRouter(Header)
