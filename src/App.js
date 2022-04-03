import React from 'react'
import styled from 'styled-components'
import Header from './components/header/header'
import Home from './components/home/home'
import {FiMenu} from 'react-icons/fi'

const App = () => {
  return (
    <Container>
    <BurgerHold>
        <Bar>
        < FiMenu size="30px"/>
        </Bar>
    </BurgerHold>
      <Wrapper>
        <Header/>
        <Home/>
      </Wrapper>
    </Container>
  )
}

export default App

const Bar = styled.div`
width: 100%;
/* background-color: blue; */
height: 90px;
display: flex;
align-items:center;
justify-content: center;
`
const Container = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
/* align-items: center; */
`
const BurgerHold = styled.div`
width: 3%;
display: flex;
align-items: flex-start;
/* background-color: red; */
`
const Wrapper = styled.div`
width: 97%;
/* background-color: orange; */
`

