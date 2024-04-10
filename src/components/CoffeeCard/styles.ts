import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem 1.5rem;
  min-height: 100px;
  width: 256px;
  background-color: ${props => props.theme.card};
  border-radius: 6px 36px;
  min-height: 19.375rem;

  .coffee-img-wrapper {
    display: flex;
    justify-content: center;
    object-fit: cover;
  }
`

export const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin: 12px 0 16px 0;
`
export const Tag = styled.div`
  background-color: ${props => props.theme['yellow-100']};
  color: ${props => props.theme['yellow-300']};
  font-size: 10px;
  text-transform: uppercase;
  font-weight: bold;
  padding: 4px 8px;

  border-radius: 100px;
`
export const InfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  gap: 8px;

  > p {
    font-size: 20px;
    font-family: 'Baloo 2', serif;
    font-weight: bold;
    color: ${props => props.theme.subtitle};
  }
  > span {
    color: ${props => props.theme.label};
  }
`
export const Action = styled.div`
  display: flex;
  align-items: center;
  /* gap: 32px; */
  justify-content: space-between;
  margin: 32px 0 0 0;
  color: ${props => props.theme.text};

  span {
    font-family: 'Baloo 2', sans-serif;
    padding: 0 0 0 4px;
    font-size: 24px;
    font-weight: 800;
    > span {
      font-weight: normal;
      font-size: 14px;
    }
  }
`
export const StepperCartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  .iconWrapper {
    display: flex;
    justify-content: center;
    padding: 8px;
    border-radius: 9px;
    background-color: ${props => props.theme['purple-700']};
    color: ${props => props.theme.white};
    cursor: pointer;
  }
`
