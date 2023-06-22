import {Component} from 'react'

import DenominationItem from '../DenominationItem/index'

class CashWithdrawal extends Component {
  render() {
    const {denominationsList} = this.props
    return (
      <div>
        <ul>
          <DenominationItem />
        </ul>
      </div>
    )
  }
}

export default CashWithdrawal
