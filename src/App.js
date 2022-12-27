import { Navbar, Hero, Card } from './components'
import data from './constants'

const cards = data.map((card) => {
  return <Card key={card.id} {...card} />
})

const App = () => (
  <div>
    <Navbar />
    <Hero />
    <section className='cards-list'>{cards}</section>
  </div>
)

export default App
