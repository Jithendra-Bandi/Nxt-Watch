import styled from 'styled-components'

export const VideoItemDetailsRoute = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const HomeContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`
export const Container = styled.div`
  height: 90vh;
  overflow: auto;
  @media (min-width: 768px) {
    width: 80%;
  }
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
  color: #000000;
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
