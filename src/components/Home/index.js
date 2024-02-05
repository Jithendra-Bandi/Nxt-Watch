import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {IoMdClose, IoMdSearch} from 'react-icons/io'
import Header from '../Header'
import NavController from '../NavController'
import AppContext from '../../context/AppContext'
import VideoItem from '../VideoItem'
import {
  HomeRoute,
  HomeContainer,
  RightContainer,
  Banner,
  BannerBetween,
  Logo,
  BannerCloseButton,
  BannerPara,
  BannerButton,
  RightContent,
  SearchContainer,
  Input,
  SearchIconButton,
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

class Home extends Component {
  state = {showBanner: true, search: '', list: [], showCase: display.loading}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    this.setState({showCase: display.loading})
    const {search} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${search}`
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

  searchChange = event => this.setState({search: event.target.value})

  closeBanner = () => this.setState({showBanner: false})

  render() {
    const {showBanner, search} = this.state
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark} = value
          const keyDownEvent = event => {
            if (event.key === 'Enter') this.getDetails()
          }
          const noItemsView = () => (
            <Center>
              <FailureCard>
                <FailureImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                  alt="no videos"
                />
                <FailureHeading isDark={isDark}>
                  No Search results found
                </FailureHeading>
                <FailurePara>
                  Try different key words or remove search filter
                </FailurePara>
                <FailureButton type="button" onClick={this.getDetails}>
                  Retry
                </FailureButton>
              </FailureCard>
            </Center>
          )
          const successDisplay = () => {
            const {list} = this.state
            if (list.length === 0) return noItemsView()
            return (
              <Ul>
                {list.map(each => (
                  <VideoItem key={each.id} data={each} />
                ))}
              </Ul>
            )
          }
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
          const bannerDisplay = () => (
            <Banner data-testid="banner">
              <BannerBetween>
                <Logo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="nxt watch logo"
                />
                <BannerCloseButton
                  data-testid="close"
                  type="button"
                  onClick={this.closeBanner}
                >
                  <IoMdClose />
                </BannerCloseButton>
              </BannerBetween>
              <BannerPara>
                Buy Nxt Watch Premium prepaid plans with UPI
              </BannerPara>
              <BannerButton type="button">GET IT NOW</BannerButton>
            </Banner>
          )
          return (
            <HomeRoute isDark={isDark} data-testid="home">
              <Header />
              <HomeContainer>
                <NavController />
                <RightContainer>
                  {showBanner && bannerDisplay()}
                  <RightContent>
                    <SearchContainer>
                      <Input
                        type="search"
                        value={search}
                        onChange={this.searchChange}
                        onKeyDown={keyDownEvent}
                        placeholder="Search"
                        isDark={isDark}
                      />
                      <SearchIconButton
                        isDark={isDark}
                        type="button"
                        onClick={this.getDetails}
                        data-testid="searchButton"
                      >
                        <IoMdSearch />
                      </SearchIconButton>
                    </SearchContainer>
                    {displayResult()}
                  </RightContent>
                </RightContainer>
              </HomeContainer>
            </HomeRoute>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Home
