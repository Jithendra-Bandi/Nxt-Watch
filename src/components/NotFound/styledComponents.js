import styled from 'styled-components'

export const HomeContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`
export const Container = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  font-size: 13px;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    min-height: 50vh;
    font-size: 20px;
    width: 80%;
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
