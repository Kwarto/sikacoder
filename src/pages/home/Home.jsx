import React from 'react'
import { Main } from '../../layout'
import { Community, CTA, Hero, NewsLetter, Offers, Process, Why } from '../../components'

const Home = () => {
  return (
    <Main>
        <Hero />
        <Process />
        <Why />
        <Offers />
        <CTA />
        <Community />
        <NewsLetter />
    </Main>
  )
}

export default Home