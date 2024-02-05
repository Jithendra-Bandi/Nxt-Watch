import styled from 'styled-components'

export const HomeRoute = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
`

export const HomeContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`
export const RightContainer = styled.div`
  width: 100%;
  height: 90vh;
  overflow: auto;
  @media (min-width: 768px) {
    width: 80%;
  }
`
export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding: 10px;
  @media (min-width: 768px) {
    min-height: 30vh;
    padding: 40px;
    line-height: 3;
  }
`
export const BannerBetween = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Logo = styled.img`
  width: 20%;
`
export const BannerCloseButton = styled.button`
  border-width: 0px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`
export const BannerPara = styled.p`
  color: black;
`
export const BannerButton = styled.button`
  align-self: flex-start;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: 1px solid black;
  padding: 10px;
  color: black;
`
export const RightContent = styled.div`
  padding: 10px;
`
export const SearchContainer = styled.div`
  display: flex;
  @media (min-width: 576px) and (max-width: 767px) {
    width: 80%;
  }
  @media (min-width: 768px) {
    width: 50%;
  }
`
export const Input = styled.input`
  background-color: transparent;
  border: 1px solid ${props => (props.isDark ? '#1e293b' : '#94a3b8')};
  color: ${props => (props.isDark ? '#606060' : '#475569')};
  padding: 8px;
  font-size: 15px;
  flex-grow: 1;
`
export const SearchIconButton = styled.button`
  background-color: ${props => (props.isDark ? '#424242' : '#f1f1f1')};
  border: 1px solid ${props => (props.isDark ? '#1e293b' : '#94a3b8')};
  padding-left: 15px;
  color: #909090;
  padding-right: 15px;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
`

export const Center = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  font-size: 13px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`
export const FailureCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
`
export const FailureImage = styled.img`
  width: 50%;
`
export const FailureHeading = styled.h1`
  color: ${props => (props.isDark ? '#e2e8f0' : '#1e293b')};
  text-align: center;
`
export const FailurePara = styled.p`
  text-align: center;
  color: #94a3b8;
`
export const FailureButton = styled.button`
  cursor: pointer;
  outline: none;
  border-width: 0px;
  padding: 10px;
  color: white;
  background-color: #4f46e5;
  border-radius: 5px;
`
export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
`
