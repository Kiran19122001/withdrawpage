import {Component} from 'react'

import './index.css'

class DenominationItem extends Component {
  state = {count: 2000}

  onFifty = () => {
    this.setState(prev => ({count: prev.count - 50}))
  }

  onHundred = () => {
    this.setState(prev => ({count: prev.count - 100}))
  }

  onTwoHundred = () => {
    this.setState(prev => ({count: prev.count - 200}))
  }

  onFiveHundred = () => {
    this.setState(prev => ({count: prev.count - 500}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="cont-1">
        <div className="cont-2">
          <div className="cont-3">
            <p className="firstName">S</p>
            <h1 className="lastName">Sarah Williams</h1>
          </div>
          <div className="cont-4">
            <p className="balence">Your Balance</p>
            <p className="rupees">{count}</p>
          </div>
          <p className="letters">in Rupees</p>
          <div>
            <p className="withdraw">Withdraw</p>
            <p className="choose">CHOOSE SUM (IN RUPEES)</p>
            <div className="cont-5">
              <div className="items">
                <li>
                  <button
                    type="button"
                    className="button"
                    onClick={this.onFifty}
                  >
                    50
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="button"
                    onClick={this.onHundred}
                  >
                    100
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="button"
                    onClick={this.onTwoHundred}
                  >
                    200
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="button"
                    onClick={this.onFiveHundred}
                  >
                    500
                  </button>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DenominationItem
