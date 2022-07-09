import React from 'react'
import HighlightsPage from '../components/highlights/HighlightsPage'
import Register from '../components/register/Register'
import Speakers from '../components/speakers/Speakers'
import Btn from '../components/button/Btn'

const Home = () => {
  return (
    <>
    <div>
        <Register/>
        <Btn/>
        <Speakers/>
        <HighlightsPage/>
    </div>
    </>
  )
}

export default Home