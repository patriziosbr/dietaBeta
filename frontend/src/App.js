import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'

// import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import AddEvent from './pages/AddEvent'
import EventDashboard from './pages/EventDashboard'
import CalendarTest from './pages/CalendarTest'
import PastDaysGames from './pages/PastDaysGames'
import SingleDayGames from './pages/SingleDayGames'


function App() {
  return (
    <>
      <Router>
        <div>

          <Header />
          <Routes>
            {/* <Route exact path='/' element={<Dashboard />} /> */}
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/' element={<AddEvent />} />
            <Route exact path='/events' element={<EventDashboard />} />
            <Route exact path='/CalendarTest' element={<CalendarTest />} />
            <Route exact path='/PastDaysGames' element={<PastDaysGames />} />
            <Route exact path='/SingleDayGames' element={<SingleDayGames />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
