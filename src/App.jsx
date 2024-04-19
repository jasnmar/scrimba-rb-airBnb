

import './App.css'
import Card from './components/Card/Card'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'


/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/

function App() {
   return (
    <>
      <Navbar />
      <Hero />
      <Card img="katie-zaferes.png" rating="5.0" reviewCount={6} country="USA" title="Life Lessons with Katie Zaferes" price={136} />
      <h1>app</h1>
        
    </>
  )
}

export default App


/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/