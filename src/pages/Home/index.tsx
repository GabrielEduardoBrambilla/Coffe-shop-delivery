import { Card } from '../../components/CoffeeCard'
import { Hero } from '../../components/HeroSection'
import Navbar from '../../components/Navbar'
import { CardGrid, Container } from './styles'

export function Home() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <p className="coffee-title">Nossos cafés</p>
      <CardGrid>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardGrid>
    </Container>
  )
}
