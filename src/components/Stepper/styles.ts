import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px 12px;
  background-color: ${props => props.theme.button};
  color: ${props => props.theme['purple-700']};
  border-radius: 8px;

  > p {
    font-size: 16px;
    font-weight: normal;
    color: ${props => props.theme.title};
  }
`
