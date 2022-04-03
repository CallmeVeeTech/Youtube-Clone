import React from 'react'
import styled from 'styled-components'
import Videos from '../home/videos'

const Home = () => {
  return (
    <Container>
        <Videos/>
    </Container>
  )
}

export default Home

const Container = styled.div`
width: 100%;
`

