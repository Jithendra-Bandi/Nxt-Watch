import styled from 'styled-components'

export const Nav = styled.nav`
  padding: 20px;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.isDark ? '#212121' : 'ffffff')};
`
export const Logo = styled.img`
  width: 50%;
`
export const SmallRow = styled.ul`
  padding: 0px;
  display: flex;
  justify-content: space-between;
  width: 30%;
  @media (min-width: 768px) {
    display: none;
  }
`
export const IconButton = styled.button`
  border-width: 0px;
  background-color: transparent;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  cursor: pointer;
  outline: none;
  align-self: center;
`
export const LargeRow = styled.ul`
  padding: 0px;
  display: none;
  justify-content: space-between;
  width: 15%;
  @media (min-width: 768px) {
    display: flex;
  }
`
export const ProfileImage = styled.img`
  height: 40px;
  align-self: center;
  cursor: pointer;
`
export const LogoutButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  outline: none;
  align-self: center;
  border: 1px solid ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
  color: ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
  padding: 10px;
  border-radius: 5px;
  align-self: center;
`
export const Para = styled.p`
  text-align: center;
  color: ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
`
export const RowBetween = styled.div`
  display: flex;
  justify-content: space-around;
`
export const CancelButton = styled.button`
  border: 1px solid #616e7c;
  color: #616e7c;
  background-color: transparent;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
`
export const ConfirmButton = styled.button`
  cursor: pointer;
  outline: none;
  padding: 8px;
  border-radius: 5px;
  color: #ffffff;
  background-color: #3b82f6;
  border-width: 0px;
`
export const MenuPopupContainer = styled.div`
  width: 100vw;
`

export const CrossContainer = styled.div`
  text-align: right;
  margin-bottom: 20px;
`
export const CrossButton = styled.button`
  cursor: pointer;
  outline: none;
  border-width: 0px;
  background-color: transparent;
  margin-right: 50px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`
export const LeftLinks = styled.div`
  text-align: center;
`
export const Row = styled.div`
  display: flex;
  align-items: center;
  color: ${props => (props.active ? '#ff0b37' : '#94a3b8')};
  background-color: ${props => {
    if (props.active) {
      return props.isDark ? '#313131' : '#f4f4f4'
    }
    return 'transparent'
  }};
  padding-left: 10px;
`
export const LinksPara = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  margin-left: 15px;
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
`
