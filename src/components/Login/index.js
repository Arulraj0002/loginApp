import {Component} from 'react'
import './index.css'

class Login extends Component {
  state = {isLogin: true}

  clickEvent = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state
    return (
      <div>
        <h1 className="heading">Please Login</h1>
        <button className="button" onClick={this.clickEvent} type="submit">
          Login
        </button>
      </div>
    )
  }
}

export default Login
