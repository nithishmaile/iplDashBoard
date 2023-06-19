// Write your code here
import {Component} from 'react'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamCard: []}

  componentDidMount() {
    this.getTeamCardDetails()
  }

  getTeamCardDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const teamDataList = data.teams
    const updatedData = teamDataList.map(eachObj => ({
      id: eachObj.id,
      name: eachObj.name,
      teamImageUrl: eachObj.team_image_url,
    }))
    this.setState({teamCard: updatedData})
  }

  render() {
    const {teamCard} = this.state

    return (
      <div className="home-container">
        <div className="dashboard-heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="dashboard-heading">IPL Dashboard</h1>
        </div>
        <ul className="teamCard-unordered-list-container">
          {teamCard.map(eachObj => (
            <TeamCard teamCardDetails={eachObj} key={eachObj.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Home
