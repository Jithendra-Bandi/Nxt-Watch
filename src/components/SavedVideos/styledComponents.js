import styled from 'styled-components'

export const SavedRoute = styled.div`
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
  color: ${props => (props.isDark ? '#e2e8f0' : '#1e293b')};
  text-align: center;
`
export const FailurePara = styled.p`
  text-align: center;
  color: ${props => (props.isDark ? '#e2e8f0' : '#1e293b')};
`
export const Head = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.isDark ? '#181818' : '#f4f4f4')};
  padding: 10px;
  padding-left: 30px;
`
export const Heading = styled.h1`
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  flex-grow: 1;
  margin-left: 20px;
`
export const IconContainer = styled.div`
  color: red;
  background-color: #e2e8f0;
  padding: 10px;
  border-radius: 100%;
  background-color: ${props => (props.isDark ? '#000000' : '#e2e8f0')};
  @media (min-width: 768px) {
    padding: 25px;
  }
`
export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
`

// export const Container = styled.div`

// `
