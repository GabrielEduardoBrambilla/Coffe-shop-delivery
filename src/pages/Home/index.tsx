import { Hero } from '../../components/HeroSection'
import Navbar from '../../components/Navbar'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Navbar />
      <Hero />
    </Container>
  )
}
