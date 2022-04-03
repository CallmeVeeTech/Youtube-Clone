import React from 'react'
import styled from 'styled-components'

const Videos = () => {
  return (
    <Container>
      <Wrapper>
      <Card>
        <Videodiv>
          <video playsInline={true} loop={true} controls={true} >
            <source src="/videos/star-wars.mp4" />
          </video>
        </Videodiv>
        <VideoInfo>
          <ImgIcon><img src="/img/veek.jpg"/></ImgIcon>
          <Text>
            <h3>Pixar Shows</h3>
            <span>Christian House</span><br/>
            <span>1.9M views. </span>
          </Text>
        </VideoInfo>
        <Downbutton>
            <Watchl>WATCH LATER</Watchl>
            <Queue>ADD TO QUEUE</Queue>
          </Downbutton>
      </Card>
      <Card>
        <Videodiv>
          <video playsInline={true} loop={true} controls={true} >
            <source src="/videos/pixar.mp4" />
          </video>
        </Videodiv>
        <VideoInfo>
          <ImgIcon><img/></ImgIcon>
          <Text>
            <h3>The New Fighters in League 4</h3>
            <span>Christian House</span><br/>
            <span>1.9M views. </span>
          </Text>
        </VideoInfo>
        <Downbutton>
            <Watchl>WATCH LATER</Watchl>
            <Queue>ADD TO QUEUE</Queue>
          </Downbutton>
      </Card>
      <Card>
        <Videodiv>
          <video playsInline={true} loop={true} controls={true} >
            <source src="/videos/disney.mp4" />
          </video>
        </Videodiv>
        <VideoInfo>
          <ImgIcon><img src="/img/manavatar.jpg"/></ImgIcon>
          <Text>
            <h3>Three ways God shows you who to Marry</h3>
            <span>Christian House</span><br/>
            <span>1.9M views. </span>
          </Text>
        </VideoInfo>
        <Downbutton>
            <Watchl>WATCH LATER</Watchl>
            <Queue>ADD TO QUEUE</Queue>
          </Downbutton>
      </Card>
      <Card>
        <Videodiv>
          <video playsInline={true} loop={true} controls={true} >
            <source src="/videos/marvel.mp4" />
          </video>
        </Videodiv>
        <VideoInfo>
          <ImgIcon><img/></ImgIcon>
          <Text>
            <h3>The Power of Muscles</h3>
            <span>Christian House</span><br/>
            <span>1.9M views. </span>
          </Text>
        </VideoInfo>
        <Downbutton>
            <Watchl>WATCH LATER</Watchl>
            <Queue>ADD TO QUEUE</Queue>
          </Downbutton>
      </Card>
      </Wrapper>
    </Container>
  )
}

export default Videos

const Watchl = styled.div`
display: flex;
  align-items: center;
justify-content: center;
width: 450px;
height: 50px;
outline: none;
border-radius: 7px;
margin: 3px;
background-color:white;
:hover{
  
}
`
const Queue = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 450px;
height: 50px;
outline: none;
border-radius: 7px;
margin: 3px;
background-color:white;

`
const Downbutton = styled.div`
display: none;
flex-direction: column;
:hover{
  display: flex;
}
`
const Text = styled.div`
h3{
  font-size: 20px;
}
`
const VideoInfo = styled.div`
display: flex;
width: 450px;
/* justify-content: space-between; */
align-items: center;
`
const ImgIcon = styled.div`
width: 60px;
height: 60px;
border-radius: 100%;
background-color: green;
img{
  height:100%;
  width: 100%;
  border-radius:100%;
}
`
const Videodiv = styled.div`
width: 500px;
height: 350px;
video{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
`
const Wrapper = styled.div`
width: 100%;
justify-items: center;
display: grid;
grid-template-columns: repeat(4, minmax(0, 1fr));
/* background-color: orange; */

`
const Card = styled.div`
width: 500px;
height: 500px;
/* background-color:purple; */
display: flex;
align-items: center;
flex-direction: column;
border-radius: 3px;
box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
:hover{
  transition: all 400ms;
    transform: scale(1.1);
    cursor: pointer;
    height: 550px;
    
}
`
const Container = styled.div`
width: 100%;
/* background-color: yellow; */
display: flex;
justify-content: center;
margin-top: 25px;
` 
