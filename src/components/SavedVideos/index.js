import {FaFireAlt} from 'react-icons/fa'
import Header from '../Header'
import NavController from '../NavController'
import VideoItem from '../VideoItem'
import AppContext from '../../context/AppContext'
import {
  SavedRoute,
  HomeContainer,
  Container,
  Center,
  FailureCard,
  FailureImage,
  FailureHeading,
  FailurePara,
  Head,
  IconContainer,
  Heading,
  Ul,
} from './styledComponents'

const SavedVideos = () => (
  <AppContext.Consumer>
    {value => {
      const {savedList, isDark} = value
      const renderSavedListDisplay = () => {
        console.log(savedList)
        return (
          <>
            <Head isDark={isDark} data-testid="banner">
              <IconContainer isDark={isDark}>
                <FaFireAlt className="icon" />
              </IconContainer>
              <Heading isDark={isDark}>Saved Videos</Heading>
            </Head>
            <Ul>
              {savedList.map(each => (
                <VideoItem styling="styling" key={each.id} data={each} />
              ))}
            </Ul>
          </>
        )
      }
      const renderNoVideosDisplay = () => (
        <Center>
          <FailureCard>
            <FailureImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <FailureHeading isDark={isDark}>
              No saved videos found
            </FailureHeading>
            <FailurePara isDark={isDark}>
              You can save your videos while watching them
            </FailurePara>
          </FailureCard>
        </Center>
      )
      const successDisplay = () => {
        if (savedList.length === 0) {
          return renderNoVideosDisplay()
        }
        return renderSavedListDisplay()
      }

      return (
        <SavedRoute isDark={isDark} data-testid="savedVideos">
          <Header />
          <HomeContainer>
            <NavController />
            <Container>{successDisplay()}</Container>
          </HomeContainer>
        </SavedRoute>
      )
    }}
  </AppContext.Consumer>
)

export default SavedVideos
