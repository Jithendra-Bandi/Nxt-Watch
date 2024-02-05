import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import DetailedVideo from '../DetailedVideo'
import NavController from '../NavController'
import AppContext from '../../context/AppContext'
import {
  VideoItemDetailsRoute,
  HomeContainer,
  Container,
  Center,
  FailureCard,
  FailureImage,
  FailureHeading,
  FailurePara,
  FailureButton,
} from './styledComponents'

const display = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {details: [], showCase: display.loading}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    this.setState({showCase: display.loading})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const details = {
        id: data.video_details.id,
        title: data.video_details.title,
        thumbnailUrl: data.video_details.thumbnail_url,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        videoUrl: data.video_details.video_url,
        description: data.video_details.description,
      }
      this.setState({details, showCase: display.success})
    } else this.setState({showCase: display.failure})
  }

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark, savedList} = value
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
                <FailureHeading>Oops! Something Went Wrong</FailureHeading>
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
            const {details} = this.state
            const filteredSavedList = savedList.filter(
              each => each.id === details.id,
            )
            return (
              <DetailedVideo
                data={details}
                save={filteredSavedList.length !== 0}
              />
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
            <VideoItemDetailsRoute
              isDark={isDark}
              data-testid="videoItemDetails"
            >
              <Header />
              <HomeContainer>
                <NavController />
                <Container>{displayResult()}</Container>
              </HomeContainer>
            </VideoItemDetailsRoute>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default VideoItemDetails
