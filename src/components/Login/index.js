import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  LoginContainer,
  LoginForm,
  LoginLogo,
  LoginLabel,
  LoginInput,
  Row,
  LoginCheckbox,
  Para,
  LoginButton,
  ErrorText,
} from './styledComponents'
import AppContext from '../../context/AppContext'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showError: false,
    errorText: '',
  }

  onChangeUserName = event => this.setState({username: event.target.value})

  onChangePassword = event => this.setState({password: event.target.value})

  onChangeShowPassword = () =>
    this.setState(prev => ({showPassword: !prev.showPassword}))

  onSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const credentials = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(credentials),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const {history} = this.props
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      history.replace('/')
    } else this.setState({showError: true, errorText: data.error_msg})
  }

  render() {
    const {username, password, showPassword, showError, errorText} = this.state
    if (Cookies.get('jwt_token') !== undefined) return <Redirect to="/" />
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <LoginContainer isDark={isDark}>
              <LoginForm onSubmit={this.onSubmit} isDark={isDark}>
                {isDark && (
                  <LoginLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    alt="website logo"
                  />
                )}
                {!isDark && (
                  <LoginLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                )}
                <LoginLabel isDark={isDark} htmlFor="username">
                  USERNAME
                </LoginLabel>
                <LoginInput
                  isDark={isDark}
                  id="username"
                  type="text"
                  placeholder="Username"
                  onChange={this.onChangeUserName}
                  value={username}
                />
                <LoginLabel isDark={isDark} htmlFor="password">
                  PASSWORD
                </LoginLabel>
                {showPassword && (
                  <LoginInput
                    isDark={isDark}
                    id="password"
                    type="text"
                    placeholder="Password"
                    onChange={this.onChangePassword}
                    value={password}
                  />
                )}
                {!showPassword && (
                  <LoginInput
                    isDark={isDark}
                    id="password"
                    type="password"
                    placeholder="Password"
                    onChange={this.onChangePassword}
                    value={password}
                  />
                )}
                <Row>
                  <LoginCheckbox
                    type="checkbox"
                    id="showPassword"
                    value={showPassword}
                    onChange={this.onChangeShowPassword}
                  />
                  <Para htmlFor="showPassword" isDark={isDark}>
                    Show Password
                  </Para>
                </Row>
                <LoginButton type="submit">Login</LoginButton>
                {showError && <ErrorText>{`*${errorText}`}</ErrorText>}
              </LoginForm>
            </LoginContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Login
