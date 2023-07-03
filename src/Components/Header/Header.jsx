import React from 'react'
import { Top } from './Top/Top'
import { Navigation } from './Navigation/Navigation'
import { Container } from '../Layout/Container/Container'

export const Header = () => {
  return (
    <header>
      <Container className='container'>
        <Top/>
        <Navigation />
      </Container>
    </header>
  )
}
