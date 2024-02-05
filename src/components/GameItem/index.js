import {Link} from 'react-router-dom'
import {GameLi, LiImage, Heading, Para} from './styledComponents'
import AppContext from '../../context/AppContext'

const GameItem = props => {
  const {data} = props
  return (
    <AppContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <GameLi>
            <Link className="nav-link wrap" to={`/videos/${data.id}`}>
              <LiImage src={data.thumbnailUrl} alt="video thumbnail" />
              <Heading isDark={isDark}>{data.title}</Heading>
              <Para>{data.viewCount} Watching Worldwide</Para>
            </Link>
          </GameLi>
        )
      }}
    </AppContext.Consumer>
  )
}

export default GameItem
