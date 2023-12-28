import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createScheduledEvent } from '../features/scheduledEvent/scheduledEventSlice'

function GoalForm() {
  const [text, setText] = useState('')
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



  return (
    <div>
      <div>risultato GET averso sofascore</div>
      <div>
        <button onClick={onSubmit}>Salva su mongo</button>
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
