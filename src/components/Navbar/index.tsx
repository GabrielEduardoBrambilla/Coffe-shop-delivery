import { ActionButtons, CartButton, Container, LogoContainer } from './styles'
import { ShoppingCart, MapPin } from '@phosphor-icons/react'
import Logo from '../../assets/Logo.svg'
export default function Navbar() {
  return (
    <Container>
      <LogoContainer>
        <img src={Logo} alt="" />
      </LogoContainer>
      <ActionButtons>
        <span>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </span>
        <CartButton>
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </ActionButtons>
    </Container>
  )
}
