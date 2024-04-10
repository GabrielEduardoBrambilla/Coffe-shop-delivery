import { Action, Container, InfoWrapper, Tag, TagWrapper } from './styles'
import CoffeDefault from '../../assets/images/Image.png'
import { Car, ShoppingCart } from '@phosphor-icons/react'
export function Card() {
  return (
    <Container>
      <div className="coffee-img-wrapper">
        <img src={CoffeDefault} alt="" />
      </div>
      <TagWrapper>
        <Tag>Tradicional</Tag>
        <Tag>Com Leite</Tag>
      </TagWrapper>
      <InfoWrapper>
        <p>Expresso tradicional</p>
        <span>O tradicional café feito com água quente e grãos moídos</span>
      </InfoWrapper>
      <Action>
        <p>
          <span>R$ </span>
          9,90
        </p>
        <div className="stepper-cart">
          <div className="iconWrapper">
            <ShoppingCart size={22} weight="fill" />
          </div>
        </div>
      </Action>
    </Container>
  )
}
