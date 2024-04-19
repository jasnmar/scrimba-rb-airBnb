

import './App.css'
import Card from './components/Card/Card'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import data from './data'


/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/


function App() {
  const cards = data.map((card) => {
    return <Card 
      img={card.coverImg} 
      rating={card.rating} 
      reviewCount={card.stats.reviewCount} 
      location={card.location} 
      title={card.title} 
      price={card.price} /> 
  })
  console.log(cards)
  return (
    <>
      <Navbar />
      <Hero />
      {cards}
        
    </>
  )
}

export default App


/*
<Card 
        img="katie-zaferes.png" 
        rating="5.0" 
        reviewCount={6} 
        country="USA" 
        title="Life Lessons with Katie Zaferes" 
        price={136} 
      />
*/