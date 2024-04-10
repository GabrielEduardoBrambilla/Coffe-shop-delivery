import React from 'react'
import { Container } from './styles'
import { Minus, Plus } from '@phosphor-icons/react'

export function Stepper() {
  return (
    <Container>
      <Minus size={14} />
      <p>1</p>
      <Plus size={14} />
    </Container>
  )
}
