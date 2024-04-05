import {
  AdvantagesPoint,
  AdvantagesPointWrapper,
  Container,
  ImageContainer,
  LeftSection,
  TextWrapper
} from './styles'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import coffeImage from '../../assets/images/Imagem.svg'

export function Hero() {
  return (
    <Container>
      <LeftSection>
        <TextWrapper>
          <h2>Encontre o café perfeito para qualquer hora do dia</h2>
          <p>
            Com o Coffee Delivery você recebe seu cafe onde estiver, a qualquer
            hora
          </p>
        </TextWrapper>
        <AdvantagesPointWrapper>
          <AdvantagesPoint>
            <ShoppingCart size={16} weight="fill" />
            <span>Compra simples e segura</span>
          </AdvantagesPoint>
          <AdvantagesPoint>
            <Timer size={16} weight="fill" />
            <span>Entrega rápida e rastreada</span>
          </AdvantagesPoint>
          <AdvantagesPoint>
            <Package size={16} weight="fill" />
            <span>Embalagem mantém o café intacto</span>
          </AdvantagesPoint>
          <AdvantagesPoint>
            <Coffee size={16} weight="fill" />
            <span>O café chega fresquinho até você</span>
          </AdvantagesPoint>
        </AdvantagesPointWrapper>
      </LeftSection>
      <ImageContainer>
        <img src={coffeImage} alt="" />
      </ImageContainer>
    </Container>
  )
}
