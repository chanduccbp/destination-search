// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput),
    )
    return (
      <div className="bg-container">
        <h1 className="title">Destination Search</h1>
        <div className="input-cont">
          <input
            type="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
            className="input-el"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-img"
          />
        </div>
        <ul className="list-container">
          {searchResults.map(eachDestination => (
            <DestinationItem
              destinationDetails={eachDestination}
              key={eachDestination.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
