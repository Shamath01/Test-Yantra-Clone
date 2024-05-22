import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Components/Header/Header'
import Entry from './Components/Entry/Entry'
import Prof from './Components/Prof_Service/Service'
import Stats from './Components/Stats/Stats'
import Article from './Components/Article/Article'
import Footer from './Components/Footer/Footer'

const Main = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Entry/>
        <Prof/>
        <Stats/>
        <Article/>
        <Footer/>
        <Routes>
          <Route path='/Header' element={<Header/>}/>
          <Route path='/Entry' element={<Entry/>}/>
          <Route path='/Prof' element={<Prof/>}/>
          <Route path='/Stats' element={<Stats/>}/>
          <Route path='/Article' element={<Article/>}/>
          <Route path='/Footer' element={<Footer/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default Main
