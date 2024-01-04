// Write your code here

import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails

  return (
    <li className="destination-card-container">
      <img src={imgUrl} className="destination-pic" alt={name} />
      <p> {name} </p>
    </li>
  )
}

export default DestinationItem
