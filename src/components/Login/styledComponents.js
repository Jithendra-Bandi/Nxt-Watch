import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.isDark ? '#231f20' : '#ffffff')};
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  border-radius: 10px;
  padding: 15px;
  padding-top: 30px;
  padding-bottom: 30px;
  box-shadow: ${props => (props.isDark ? '0px' : '0px 0px 2px 0px #94a3b8')};
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
  @media (min-width: 768px) {
    width: 30%;
    padding: 40px;
  }
`
export const LoginLogo = styled.img`
  align-self: center;
  width: 40%;
  margin-bottom: 20px;
`
export const LoginLabel = styled.label`
  margin-top: 15px;
  margin-bottom: 3px;
  font-size: 8px;
  color: ${props => (props.isDark ? '#ffffff' : '#94a3b8')};
  @media (min-width: 768px) {
    font-size: 11px;
  }
`
export const LoginInput = styled.input`
  background-color: transparent;
  border: 1px solid ${props => (props.isDark ? '#606060' : '#d7dfe9')};
  color: ${props => (props.isDark ? '#d7dfe9' : '#606060')};
  padding: 8px;
  font-size: 15px;
  border-radius: 4px;
`
export const Row = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 20px;
`
export const LoginCheckbox = styled.input`
  border-width: 0px;
  outline: none;
`
export const Para = styled.label`
  margin-left: 10px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`
export const LoginButton = styled.button`
  border-width: 0px;
  border-radius: 10px;
  color: #ffffff;
  background-color: #3b82f6;
  cursor: pointer;
  outline: none;
  padding: 8px;
`
export const ErrorText = styled.p`
  color: red;
  margin-top: 0px;
`
