// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamCardDetails} = props
  const {name, teamImageUrl, id} = teamCardDetails
  /* componentDidMount = () => {
    this.getTeamCardDetails()
  }

  getTeamCardDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.map(eachObj => ({
      id: eachObj.id,
      name: eachObj.name,
      teamImageUrl: eachObj.team_image_url,
    }))
    console.log(data)
    this.setState({teamCard: updatedData})
  } */

  return (
    <Link to={`/team-matches/${id}`} className="teamCard-link-container">
      <li className="teamCard-list-container">
        <img src={teamImageUrl} alt={name} className="teamCard-image" />
        <h1 className="teamCard-name">{name}</h1>
      </li>
    </Link>
  )
}

export default TeamCard
