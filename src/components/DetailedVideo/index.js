import {Component} from 'react'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import {
  DetailedContainer,
  DetailedRowBetween,
  DetailedHeading,
  DetailedRow,
  DetailedLiUl,
  DetailedButton,
  DetailedHr,
  DetailedLogo,
  DetailedPara,
} from './styledComponents'
import AppContext from '../../context/AppContext'

class DetailedVideo extends Component {
  state = {like: false, dislike: false}

  render() {
    const {data, save} = this.props
    const {like, dislike} = this.state
    return (
      <AppContext.Consumer>
        {value => {
          const {onAddSavedItem, onRemoveSavedItem} = value
          const onLike = () => this.setState({like: true, dislike: false})
          const onDislike = () => this.setState({like: false, dislike: true})
          const onSave = () => {
            if (!save) {
              onAddSavedItem(data)
            } else {
              onRemoveSavedItem(data)
            }
          }
          return (
            <DetailedContainer>
              <ReactPlayer width="100%" url={data.videoUrl} controls />
              <DetailedHeading>{data.title}</DetailedHeading>
              <DetailedRowBetween>
                <DetailedRow>
                  <DetailedLiUl>
                    <li>
                      <p>{data.viewCount}</p>
                    </li>
                    <li className="time-li">
                      <p>{formatDistanceToNow(new Date(data.publishedAt))}</p>
                    </li>
                  </DetailedLiUl>
                </DetailedRow>

                <DetailedRow>
                  <DetailedRow>
                    <AiOutlineLike />
                    <DetailedButton
                      type="button"
                      active={like}
                      onClick={onLike}
                    >
                      Like
                    </DetailedButton>
                  </DetailedRow>

                  <DetailedRow>
                    <AiOutlineDislike />
                    <DetailedButton
                      type="button"
                      active={dislike}
                      onClick={onDislike}
                    >
                      Dislike
                    </DetailedButton>
                  </DetailedRow>

                  <DetailedRow>
                    <MdPlaylistAdd />
                    <DetailedButton
                      type="button"
                      active={save}
                      onClick={onSave}
                    >
                      {save ? 'Saved' : 'Save'}
                    </DetailedButton>
                  </DetailedRow>
                </DetailedRow>
              </DetailedRowBetween>
              <DetailedHr />
              <DetailedRow>
                <DetailedLogo
                  src={data.channel.profileImageUrl}
                  alt="channel logo"
                />
                <div>
                  <DetailedHeading>{data.channel.name}</DetailedHeading>
                  <DetailedPara>
                    {data.channel.subscriberCount} subscribers
                  </DetailedPara>
                </div>
              </DetailedRow>
              <DetailedPara margin>{data.description}</DetailedPara>
            </DetailedContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default DetailedVideo
