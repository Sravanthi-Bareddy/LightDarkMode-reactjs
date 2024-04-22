import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {lightMode: True}
  changeMode = () => {
    this.setState(prevState => ({lightMode: prevState.lightMode}))
  }
  getButtonText = () => {
    const {lightMode} = this.state

    return lightMode ? 'Dark Mode' : 'Light Mode'
  }

  render() {
    const {result} = this.getButtonText()

    return (
      <div className="bg-container">
        <div className="mode-change-container">
          <h1 className="mode-change-heading">click To Change Mode</h1>
          <div>
            <button type="button" onClick={this.changeMode}>
              {result}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
