import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createScheduledEvent } from '../features/scheduledEvent/scheduledEventSlice'
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const toDayApi = "2024-01-06"
const baseURL = "https://api.sofascore.com/api/v1/category/15/scheduled-events/";

function PastDaysGames() {
  const [text, setText] = useState('')
  const [resultEvent, setResultEvent] = useState(null);
  const [filteredResultEvent, setFilteredResultEvent] = useState(null);
  const [filteredEvents, setfilteredEvents] = useState(null);


  const datesArray = [
    "2024-01-05",
    "2024-01-06",
    "2024-01-07"
  ]

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const fetchData = async () => {
    const resultEvents = [];

    for (let i = 0; i < datesArray.length; i++) {
      try {
        const response = await axios.get(baseURL + datesArray[i]);
        console.log(response.data.events);

        const filteredEventsTemp = response.data.events.filter((event) => {
          return event.season.name === "NBA 23/24";
        });

        console.log(filteredEventsTemp);
        resultEvents.push(filteredEventsTemp);
      } catch (error) {
        console.error('Error fetching data:', error);
      }

      await delay(500);
    }

    console.log(resultEvents);
    setResultEvent(resultEvents);
    setfilteredEvents(resultEvents);
  };

 

  const filterEvent = () => {
    const filteredData = resultEvent.map((dailyEvent, index) => 
    dailyEvent.map(element => ({
      day_game: datesArray[index],
      tournament_slug: element.tournament.slug,
      tournament_id: element.tournament.id,
      name_season: element.season.name,
      season_year: element.season.year,
      season_id: element.season.id,
      status_code: element.status.code,
      status_description: element.status.description,
      status_type: element.status.type,
      homeTeam_slug: element.homeTeam.slug,
      homeTeam_id: element.homeTeam.id,
      awayTeam_slug: element.awayTeam.slug,
      awayTeam_id: element.awayTeam.id,
      homeScore_current: element.homeScore.current,
      homeScore_period1: element.homeScore.period1,
      homeScore_period2: element.homeScore.period2,
      homeScore_period3: element.homeScore.period3,
      homeScore_period4: element.homeScore.period4,
      awayScore_current: element.awayScore.current,
      awayScore_period1: element.awayScore.period1,
      awayScore_period2: element.awayScore.period2,
      awayScore_period3: element.awayScore.period3,
      awayScore_period4: element.awayScore.period4,
    }))
  ) 
  console.log(filteredData, "filteredDatatata");
    setFilteredResultEvent(filteredData);
  };

  const dispatch = useDispatch()

  const onSubmit = () => {
    filterEvent()
    console.log(filteredResultEvent, "filteredResultEvent");
    if(filteredResultEvent !== null && filteredResultEvent !== undefined){
      // console.log(filteredResultEvent, "herrlo inside");
      // dispatch(createScheduledEvent(filteredResultEvent)) // POST event
      filteredResultEvent.forEach((gameDays) => {
        gameDays.map((singleElement, index) => {
          dispatch(createScheduledEvent(singleElement))
          console.log("element n", singleElement);
          console.log("chiamata n", index);
        })
    });
    }

  }


  // if (!resultEvent) return null;

  return (
    <Container style={{marginTop: "80px"}}>
    <Row>
      <Col>
      <h4>Single Day</h4>
        <div>risultato GET averso sofascore</div>
        <div>
          <button onClick={fetchData}>call sofascore</button>
          <button onClick={onSubmit}>Salva su mongo</button>
        </div>
          <div>
            {/* {filteredEvents && filteredEvents.map((element, index) => (
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
            ))} */}
            <hr />

          </div>
      </Col>
    </Row>
  </Container>
  )
}

export default PastDaysGames