import './App.css'
import EventCard from './components/Images'
import Home from './pages/Home'
import Navigation from './components/Navigation'
import {Routes, Route} from 'react-router-dom'
import Favorites from './pages/Favorites'


import Projects from './pages/Projects'
import Info from './pages/Info'
import Contact from './pages/Contact'


function App() {

  // const eventNumber = 1;

  return (
    <>
    <div>
      <Navigation />
      <main className="main-content">
        <Routes>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/info" element={<Info/>}/>
          <Route path="/contact" element={<Contact/>}/>

          <Route path="/" element={<Home/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
          
          
        </Routes>
      </main>

    </div>
      








      {/* <Navigation text="Test1" text2="Test1"/>
      <Navigation />
      <br></br><br></br> */}

      {/* {eventNumber === 1 ? (
        <EventCard event={{title: "St. Patrick's Day", url: "", date: "3/17/2024", description: "This was the day..."}}/>
      ) : (
      <EventCard event={{title: "Birthday Celebration", url: "", date: "3/14/2024", description: "First day meeting.."}}/>
      )}

      {eventNumber === 1 && <EventCard event={{title: "Birthday Celebration", url: "", date: "3/14/2024", description: "First day meeting.."}}/>}
      {eventNumber === 2 && <EventCard event={{title: "St. Patrick's Day", url: "", date: "3/17/2024", description: "This was the day..."}}/>} */}
      
      
      </>
    
    
  )
}

// function Navigation({text, text2}) {

//   return (
//     <>
//     <div>Hello World</div>
//     <div>Passed in value: {text}</div>
//     <div>Another passed in value: {text2}</div>

//     </>
//   )
// }
export default App
