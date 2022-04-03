import React from 'react'
import styled from 'styled-components'
import {FaYoutube, FaMicrophone} from 'react-icons/fa'
import {BsSearch} from 'react-icons/bs'
import {BiVideoPlus} from 'react-icons/bi'
import {IoMdNotifications} from 'react-icons/io'
import {CgMenuGridR} from 'react-icons/cg'



const Header = () => {
  return (
    <Container>
    <Wrapper>
      <LeftNav>
            <FaYoutube size="50px" color="red"/>
            <p>YouTube</p>
        </LeftNav>
        <Searchbarhold>
                <input type="text" placeholder='Search'/>
                <SearchIcon>
                    <BsSearch size="20px"/>
                </SearchIcon>
                <FaMicrophone size="25px"/>
        </Searchbarhold>
        <RightNav>
            <BiVideoPlus size="30px"/>
            <CgMenuGridR size="30px"/>
            <IoMdNotifications size="30px"/>
            <Avatar>
                <img src="/img/manavatar.jpg"/>
            </Avatar>
        </RightNav>
      </Wrapper>
    </Container>
  )
}

export default Header


const Wrapper = styled.div`
width: 97%;
height: 100%;
/* background-color: blue; */
display: flex;
justify-content: space-between;
align-items: center;
`
const BurgerHold = styled.div`
width: 3%;
display: flex;
align-items: center;
justify-content: center;
`
const RightNav = styled.div`
display: flex;
width: 300px;
justify-content:space-between;
align-items: center;
`
const SearchIcon = styled.button`
height: 55px;
/* background: red; */
width: 80px;
border-top-right-radius: 2px;
border-bottom-right-radius: 2px;
outline: none;
border: 1px solid #E5E5E5;
background-color:white;
margin-right: 15px;
`
const Searchbarhold = styled.div`
display: flex;
width: 1100px;
/* justify-content: center; */
align-items: center;
input{
    height: 50px;
    width: 1000px;
    outline: none;
    border: 1px solid #E5E5E5;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    font-size: 25px;
}
`
const Avatar = styled.div`
width: 60px;
height: 60px;
border-radius: 100%;
background-color: orange;

img{
    width: 100%;
    height: 100%;
    border-radius: 100%;
}
`
const LeftNav = styled.div`
display: flex;
align-items: center;
p{
    font-size: 25px;
    font-weight: bold;
}
`
const Container = styled.div`
width: 100%;
height: 90px;
/* background-color:yellow; */
display: flex;
justify-content: center;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`
