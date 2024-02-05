import './App.css'
import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import AppContext from './context/AppContext'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Login from './components/Login'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import VideoItemDetails from './components/VideoItemDetails'

class App extends Component {
  state = {isDark: false, savedList: []}

  onChangeTheme = () => this.setState(prev => ({isDark: !prev.isDark}))

  onAddSavedItem = video => {
    const {savedList} = this.state
    if (!savedList.includes(video)) {
      this.setState(prev => ({savedList: [...prev.savedList, video]}))
    }
  }

  onRemoveSavedItem = video => {
    const {savedList} = this.state
    const filteredList = savedList.filter(each => each.id !== video.id)
    this.setState({savedList: filteredList})
  }

  render() {
    const {isDark, savedList} = this.state
    return (
      <AppContext.Provider
        value={{
          isDark,
          savedList,
          onChangeTheme: this.onChangeTheme,
          onAddSavedItem: this.onAddSavedItem,
          onRemoveSavedItem: this.onRemoveSavedItem,
        }}
      >
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route component={NotFound} />
        </Switch>
      </AppContext.Provider>
    )
  }
}

export default App
