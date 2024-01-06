import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createScheduledEvent } from '../features/scheduledEvent/scheduledEventSlice'
import axios from 'axios';

const baseURL = "https://api.sofascore.com/api/v1/category/15/scheduled-events/2024-01-06";

function GoalForm() {
  const [text, setText] = useState('')
  const [resultEvent, setResultEvent] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data.events);
      setResultEvent(response.data.events);
    });
  }, []);



  const dataScheduledEvent = {
    tournament_slug: "req.body.tournament_slug",
    tournament_id: 1,
    name_season: "req.body.name_season",
    season_year: "req.body.season_year",
    season_id: 1,
    status_code: 1,
    status_description: "req.body.status_description",
    status_type: 100,
    homeTeam_slug: "req.body.homeTeam_slug",
    homeTeam_id: 1,
    awayTeam_slug: "req.body.awayTeam_slug",
    awayTeam_id: 1,
    homeScore_current: 10,
    homeScore_period1: 11,
    homeScore_period2: 12,
    homeScore_period3: 13,
    homeScore_period4: 14,
    awayScore_current: 10,
    awayScore_period1: 11,
    awayScore_period2: 12,
    awayScore_period3: 13,
    awayScore_period4: 14,
  }

  const dispatch = useDispatch()

  const onSubmit = () => {
console.log("click");
    dispatch(createScheduledEvent( dataScheduledEvent ))
    setText('')
  }


  if (!resultEvent) return null;
  
  return (
    <div>
      <div>risultato GET averso sofascore</div>
      <div>
        <button onClick={onSubmit}>Salva su mongo</button>
      </div>
      <div>
      {resultEvent.map((element, index) => (
      <div key={index}>
        <p>Tournament Slug: {element.tournament.slug}</p>
        <p>Tournament ID: {element.tournament.id}</p>
        <p>Season Name: {element.season.name}</p>
        <p>Season Year: {element.season.year}</p>
        <p>Season ID: {element.season.id}</p>
        <p>Status Code: {element.status.code}</p>
        <p>Status Description: {element.status.description}</p>
        <p>Status Type: {element.status.type}</p>
        <p>Home Team Slug: {element.homeTeam.slug}</p>
        <p>Home Team ID: {element.homeTeam.id}</p>
        <p>Away Team Slug: {element.awayTeam.slug}</p>
        <p>Away Team ID: {element.awayTeam.id}</p>
        <p>Home Score Current: {element.homeScore.current}</p>
        <p>Home Score Period 1: {element.homeScore.period1}</p>
        <p>Home Score Period 2: {element.homeScore.period2}</p>
        <p>Home Score Period 3: {element.homeScore.period3}</p>
        <p>Home Score Period 4: {element.homeScore.period4}</p>
        <p>Away Score Current: {element.awayScore.current}</p>
        <p>Away Score Period 1: {element.awayScore.period1}</p>
        <p>Away Score Period 2: {element.awayScore.period2}</p>
        <p>Away Score Period 3: {element.awayScore.period3}</p>
        <p>Away Score Period 4: {element.awayScore.period4}</p>
      </div>
    ))}


          
          
          
          
          
      


      <hr />

    </div>
    </div>
    // <section className='form'>
    //   <form onSubmit={onSubmit}>
    //     <div className='form-group'>
    //       <label htmlFor='text'>Goal</label>
    //       <input
    //         type='text'
    //         name='text'
    //         id='text'
    //         value={text}
    //         onChange={(e) => setText(e.target.value)}
    //       />
    //     </div>
    //     <div className='form-group'>
    //       <button className='btn btn-block' type='submit'>
    //         Add Goal
    //       </button>
    //     </div>
    //   </form>
    // </section>
  )
}

export default GoalForm
