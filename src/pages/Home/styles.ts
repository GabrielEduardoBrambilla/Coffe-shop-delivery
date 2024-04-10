import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  .coffee-title {
    color: ${props => props.theme.subtitle};

    font-family: 'Baloo 2', sans-serif;
    font-size: 32px;
    font-weight: 900;
    margin: 0 ${props => props.theme.margin};
  }
`
export const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  flex: 1;
  justify-content: flex-start;
  padding: 20px ${props => props.theme.margin} 32px;
  height: auto;
  align-content: center;
  background-color: blueviolet;
`
