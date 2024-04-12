import {
  Action,
  Container,
  InfoWrapper,
  StepperCartWrapper,
  Tag,
  TagWrapper
} from './styles'
import CoffeDefault from '../../assets/images/Image.png'
import { ShoppingCart } from '@phosphor-icons/react'
import { Stepper } from '../Stepper/indext'

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
        <span>
          <span>R$ </span>
          9,90
        </span>
        <StepperCartWrapper>
          <Stepper />
          <div className="iconWrapper">
            <ShoppingCart size={22} weight="fill" />
          </div>
        </StepperCartWrapper>
      </Action>
    </Container>
  )
}
