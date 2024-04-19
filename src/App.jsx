

import './App.css'
import Card from './components/Card/Card'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import data from './data'

function App() {
  const cards = data.map((card) => {
    return <Card 
      key={card.id}
      {...card}
      /> 
  })
  return (
    <>
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>
        
    </>
  )
}

export default App

