import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  gap: 48px;
  align-items: center;
  margin: 5.625rem ${props => props.theme.margin};
  @media (max-width: 1150px) {
    flex-direction: column-reverse;
    gap: 0;
    margin: 32px ${props => props.theme.margin};
  }
`

export const LeftSection = styled.div`
  display: flex;
  flex: 1;
  max-width: 50%;

  min-height: 100%;
  flex-direction: column;
  gap: 3.75rem;
  justify-content: space-between;
  @media (max-width: 1150px) {
    max-width: 100%;
  }
`
export const TextWrapper = styled.div`
  @media (max-width: 1150px) {
    text-align: center;
  }

  > h2 {
    flex: 0;
    font-size: 3rem;
    font-weight: 800;
    font-family: 'Baloo 2', sans-serif;
    color: ${props => props.theme.title};
  }
  > p {
    color: ${props => props.theme.subtitle};

    font-size: 20px;
  }
`
export const AdvantagesPointWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 20px;
`
export const AdvantagesPoint = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 12px;
  > p {
    color: ${props => props.theme.text};
    font-size: 16px;
  }
  > svg {
    padding: 8px;
    border-radius: 90%;
    background-color: ${props => props.theme['purple-700']};
    color: ${props => props.theme.white};
  }
`
export const ImageContainer = styled.div`
  display: flex;
  /* min-width: 50%; */
  justify-content: center;
`
