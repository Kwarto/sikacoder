import React from 'react'
import { Main } from '../../layout'
import { Community, CTA, Faqs, Hero, NewsLetter, Offers, Process, Why } from '../../components'

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
        <Faqs />
    </Main>
  )
}

export default Home