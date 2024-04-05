import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  gap: 48px;
  align-items: center;
  margin: 32px 160px;
`

export const LeftSection = styled.div`
  display: flex;
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  gap: 60px;
  justify-content: space-between;
`
export const TextWrapper = styled.div`
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
  min-width: 50%;
  justify-content: center;
`
