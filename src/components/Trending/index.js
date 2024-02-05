import {Component} from 'react'
import {FaFireAlt} from 'react-icons/fa'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import NavController from '../NavController'
import VideoItem from '../VideoItem'
import AppContext from '../../context/AppContext'
import {
  TrendingRoute,
  HomeContainer,
  Container,
  Head,
  IconContainer,
  Heading,
  Center,
  FailureCard,
  FailureImage,
  FailureHeading,
  FailurePara,
  FailureButton,
  Ul,
} from './styledComponents'

const display = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {list: [], showCase: display.loading}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    this.setState({showCase: display.loading})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const list = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))
      this.setState({list, showCase: display.success})
    } else this.setState({showCase: display.failure})
  }

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark} = value
          const failureDisplay = () => (
            <Center>
              <FailureCard>
                {isDark && (
                  <FailureImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
                    alt="failure view"
                  />
                )}
                {!isDark && (
                  <FailureImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                    alt="failure view"
                  />
                )}
                <FailureHeading isDark={isDark}>
                  Oops! Something Went Wrong
                </FailureHeading>
                <FailurePara>
                  We are having some trouble to complete your request. Please
                  try again.
                </FailurePara>
                <FailureButton type="button" onClick={this.getDetails}>
                  Retry
                </FailureButton>
              </FailureCard>
            </Center>
          )

          const successDisplay = () => {
            const {list} = this.state
            return (
              <Ul>
                {list.map(each => (
                  <VideoItem styling="styling" key={each.id} data={each} />
                ))}
              </Ul>
            )
          }

          const loadingDisplay = () => (
            <div className="loader-container" data-testid="loader">
              <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
            </div>
          )

          const displayResult = () => {
            const {showCase} = this.state
            switch (showCase) {
              case display.loading:
                return loadingDisplay()
              case display.failure:
                return failureDisplay()
              case display.success:
                return successDisplay()
              default:
                return null
            }
          }
          return (
            <TrendingRoute isDark={isDark} data-testid="trending">
              <Header />
              <HomeContainer>
                <NavController />
                <Container>
                  <Head isDark={isDark} data-testid="banner">
                    <IconContainer isDark={isDark}>
                      <FaFireAlt className="icon" />
                    </IconContainer>
                    <Heading isDark={isDark}>Trending</Heading>
                  </Head>
                  {displayResult()}
                </Container>
              </HomeContainer>
            </TrendingRoute>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Trending
