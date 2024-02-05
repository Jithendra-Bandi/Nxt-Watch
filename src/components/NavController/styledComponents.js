import styled from 'styled-components'

export const LeftContainer = styled.ul`
  display: none;
  padding: 0px;
  @media (min-width: 768px) {
    background-color: ${props => (props.isDark ? '#231f20' : '#ffffff')};
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 110vh;
  }
`
export const LeftLinks = styled.div`
  display: flex;
  flex-direction: column;
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
  padding-left: 15px;
`
export const LinksPara = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  margin-left: 15px;
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
`
export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const LeftContentImage = styled.img`
  height: 30px;
  margin-right: 10px;
`
export const ContentPara = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  padding: 10px;
`
