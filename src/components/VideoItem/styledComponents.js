import styled from 'styled-components'

export const Li = styled.li`
  list-style-type: none;
  padding: 10px;
  width: 100%;
  margin-bottom: 40px;
  @media (min-width: 576px) {
    width: ${props => (props.styling ? '100%' : '45%')};
  }
  @media (min-width: 768px) {
    width: ${props => (props.styling ? '100%' : '29%')};
  }
  @media (max-width: 575px) {
    padding: 0px;
  }
`
export const LiImage = styled.img`
  margin-bottom: 10px;
  width: 100%;
  @media (min-width: 576px) {
    width: ${props => (props.styling ? '50%' : '100%')};
    margin-right: ${props => (props.styling ? '20px' : '0px')};
  }
`
export const Row = styled.div`
  display: flex;
  @media (max-width: 575px) {
    padding: ${props => (props.padding ? '10px' : '0px')};
  }
`
export const LiLogo = styled.img`
  height: 40px;
  margin-right: 10px;
  margin-top: 20px;
  @media (min-width: 576px) {
    display: ${props => (props.styling ? 'none' : 'inline')};
  }
`
export const LiTitle = styled.p`
  font-size: 15px;
  color: ${props => (props.isDark ? '#e2e8f0' : '#475569')};
  @media (min-width: 768px) {
    font-size: 15px;
  }
`
export const LiPara = styled.p`
  color: #64748b;
  margin-bottom: 0px;
  @media (min-width: 576px) {
    font-size: 12px;
  }
  @media (max-width: 575px) {
    margin-top: 0px;
    margin-right: 15px;
  }
`
export const LiUl = styled.ul`
  color: #64748b;
  display: flex;
  padding: 0px;
  margin-bottom: 0px;
  list-style-type: none;
  @media (min-width: 576px) {
    font-size: 12px;
  }
  @media (max-width: 575px) {
    margin-top: 0px;
    list-style-type: disc;
    margin-right: 15px;
  }
`

export const ConditionalRow = styled.div`
  @media (min-width: 576px) {
    display: ${props => (props.styling ? 'flex' : 'block')};
  }
`
export const ConditionalRow2 = styled.div`
  @media (max-width: 575px) {
    font-size: 12px;
    display: flex;
  }
`
