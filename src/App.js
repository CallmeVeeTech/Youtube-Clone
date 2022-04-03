import React from 'react'
import styled from 'styled-components'
import Header from './components/header/header'
import Home from './components/home/home'
import {FiMenu} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {MdOutlineExplore} from 'react-icons/md'
import {MdOutlineLibraryBooks, MdOutlineSubscriptions} from 'react-icons/md'



const App = () => {
  return (
    <Container>
    <BurgerHold>
        <Bar>
        < FiMenu size="30px"/>
        </Bar>
        <IconHold>
          <AiFillHome size="30px"/>
          <span>Home</span>
        </IconHold>
        <IconHold>
          <MdOutlineExplore size="30px"/>
          <span>Explore</span>
        </IconHold>
        <IconHold>
          <MdOutlineSubscriptions size="30px"/>
          <span>Explore</span>
        </IconHold>
        <IconHold>
          <MdOutlineLibraryBooks size="30px"/>
          <span>Explore</span>
        </IconHold>
    </BurgerHold>
      <Wrapper>
        <Header/>
        <Home/>
      </Wrapper>
    </Container>
  )
}

export default App

const IconHold = styled.div`
height: 90px;
display: flex;
align-items:center;
justify-content: center;
flex-direction: column;
margin: 5px;
`
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
align-items: center;
flex-direction: column;
/* justify-content: center; */
/* background-color: red; */
`
const Wrapper = styled.div`
width: 97%;
/* background-color: orange; */
`

