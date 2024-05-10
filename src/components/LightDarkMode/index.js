import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    lightMode: true,
  }
  
  changeMode = () => {
    this.setState(prevState => ({
      lightMode: !prevState.lightMode,
    }))
  }
  

  render() {
    const {lightMode} = this.state
    const className = lightMode ? 'light-mode' : 'dark-mode'
    const buttonText = lightMode ? 'Dark Mode' : 'Light Mode'

    return (
      <div className="bg-container">
        <div className="mode-change-container">
          <h1 className="mode-change-heading">click To Change Mode</h1>
          <div>
            <button type="button" onClick={this.changeMode} className={`className`}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
