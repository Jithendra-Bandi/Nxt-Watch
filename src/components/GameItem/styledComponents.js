import styled from 'styled-components'

export const GameLi = styled.li`
  margin: 10px;
  margin-bottom: 30px;
  width: 40%;
  list-style-type: none;
  @media (min-width: 576px) {
    width: 29%;
  }
`
export const LiImage = styled.img`
  width: 100%;
`
export const Heading = styled.p`
  color: ${props => (props.isDark ? '#e2e8f0' : '#475569')};
  font-size: 14px;
  margin-bottom: 0px;
`
export const Para = styled.p`
  margin-top: 0px;
  font-size: 14px;
  color: #64748b;
`
