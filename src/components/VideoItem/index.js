import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import {
  Li,
  LiImage,
  Row,
  LiLogo,
  LiTitle,
  LiUl,
  ConditionalRow,
  ConditionalRow2,
  LiPara,
} from './styledComponents'
import AppContext from '../../context/AppContext'

const VideoItem = props => {
  const {data, styling} = props
  const renderInStyling = styling !== undefined
  return (
    <AppContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <Li styling={renderInStyling}>
            <Link className="nav-link wrap" to={`/videos/${data.id}`}>
              <ConditionalRow styling={renderInStyling}>
                <LiImage
                  src={data.thumbnailUrl}
                  alt="video thumbnail"
                  styling={renderInStyling}
                />
                <Row padding>
                  <LiLogo
                    src={data.channel.profileImageUrl}
                    alt="channel logo"
                    styling={renderInStyling}
                  />
                  <div>
                    <LiTitle isDark={isDark}>{data.title}</LiTitle>
                    <ConditionalRow2>
                      <LiPara>{data.channel.name}</LiPara>
                      <Row>
                        <LiUl>
                          <li>
                            <p>{data.viewCount} views</p>
                          </li>
                          <li className="time-li">
                            <p>
                              {formatDistanceToNow(new Date(data.publishedAt))}
                            </p>
                          </li>
                        </LiUl>
                      </Row>
                    </ConditionalRow2>
                  </div>
                </Row>
              </ConditionalRow>
            </Link>
          </Li>
        )
      }}
    </AppContext.Consumer>
  )
}

export default VideoItem
