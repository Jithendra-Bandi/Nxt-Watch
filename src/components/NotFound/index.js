import Header from '../Header'
import NavController from '../NavController'
import AppContext from '../../context/AppContext'
import {
  HomeContainer,
  Container,
  FailureCard,
  FailureImage,
  FailureHeading,
  FailurePara,
} from './styledComponents'

const NotFound = () => (
  <AppContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <>
          <Header />
          <HomeContainer isDark={isDark}>
            <NavController deactivate />
            <Container isDark={isDark}>
              <FailureCard isDark={isDark}>
                {isDark && (
                  <FailureImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
                    alt="not found"
                  />
                )}
                {!isDark && (
                  <FailureImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                    alt="not found"
                  />
                )}
                <FailureHeading isDark={isDark}>Page Not Found</FailureHeading>
                <FailurePara isDark={isDark}>
                  We are sorry, the page you requested could not be found.
                </FailurePara>
              </FailureCard>
            </Container>
          </HomeContainer>
        </>
      )
    }}
  </AppContext.Consumer>
)

export default NotFound
