import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 2rem ${props => props.theme.margin};

  max-height: 100px;
`
export const LogoContainer = styled.div``
export const ActionButtons = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  > span {
    display: flex;
    gap: 4px;
    align-items: center;

    background-color: ${props => props.theme['purple-100']};
    color: ${props => props.theme['purple-700']};

    padding: 8px;
    border-radius: 6px;

    font-size: 14px;
    > svg {
    }
  }
`
export const CartButton = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme['yellow-100']};
  color: ${props => props.theme['yellow-300']};
  padding: 8px;
  border-radius: 6px;
`
