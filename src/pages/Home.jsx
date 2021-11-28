import wave from '../svg/wave.svg'
import wave2 from '../svg/wave2.svg'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components'



export function Header() {
  return (
      <StyledHeader>
        <NavLink to="/"><StyledButton>Home</StyledButton></NavLink>
        <NavLink to="/"><StyledButton>API List</StyledButton></NavLink>
        <NavLink to="/"><StyledButton>Contact</StyledButton></NavLink>
      </StyledHeader>
  )
}
 
function Home() {

  const [cat, setCat] = useState([])

  useEffect(() => {
     loadApi();
  }, []);

  const loadApi = async () => { 
  const result = await fetch(`https://api.thecatapi.com/v1/images/search`);
  const data = await result.json()
  console.log(data)
  setCat(data)
  }
  return (
    <>
    <Div1>
    <MiddleText> Welcome to API Paradise</MiddleText>
    <MidDiv>
      {cat.map(({ url, id}) => <ApiCat key={id} alt="alt" src={url}/>)}
      <MiddleText2>Welcome to API Paradise, a website for API Tests and code snippets. Check many API's application and their possibilities with API paradise ! (Check GitHub page for more information)</MiddleText2>
    </MidDiv>
    </Div1>
    <Div2>
      <Grid1>
        <H1>
          See many API choices, at any moment.
        </H1>
        <Text1>
            API Paradise provides a wide documentation about API and examples. Use it to see how to use API's and how they work.
        </Text1>
      </Grid1>

      <Grid2>
        <H1>
            See Examples.
        </H1>
        <Text1>
            Under each API documentation, see examples of its application and code snippets of its usage.
        </Text1>
      </Grid2>

      <Grid3>
    <SpecialFooter>
      <MiddleText3>
      All rights reserved. API Paradise Copy
      </MiddleText3>
  </SpecialFooter>
    </Grid3>
    </Div2>
    </>
  )
  }
  
export default Home;
export const colorPalette = {
    primary : "#fd1d1d",
    secondary : "#fcb045",
    third : "#FFD600",
    fourth : "#EAE45F",
    fifth : "#DDF5C2"
}
export const General = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@600&display=swap');
  body {
    font-family: 'Outfit', sans-serif;
      background-color : ${colorPalette.fifth};
  }
`

const Grid3 = styled.div`
   grid-row-start: 3;
   grid-column : 1 / span 2;
   z-index : 3;
`

const SpecialFooter = styled.footer`
height : 900px;
background-color: ${colorPalette.fourth};
background-image: url(${wave2});
background-repeat: no-repeat;
background-position-y: top;
background-size : 100%;
display : flex;
flex-direction: column;
justify-content: flex-end;
align-items : center;
`

const MiddleText3 = styled.p`
  margin-left: 20px;
  max-width : 400px;
  font-weight: bolder;
`


const Div1 = styled.div`
  background-position-y: bottom;
  background-repeat: no-repeat;
  background-image: url(${wave});
  height : 600px;
`
const Text1 = styled.p`
  font-size: large;
`

const H1 = styled.h1`
  font-weight: bolder;
  font-size: xx-large;

`
const Grid1 = styled.div`
    margin-left : 20px
`

const Grid2 = styled.div`
    grid-column: 2;
    grid-row: 2;
`
const Div2 = styled.div`
  margin-bottom: none;
  display : grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 40px;
  grid-template-rows: 1fr 1fr 3fr;
  background-color: ${colorPalette.primary};
`

const StyledHeader = styled.header`
    margin-bottom: 20px;
    height: 70px;
    display : flex;
    align-items : center;
    justify-content : flex-end;
    width : 100%;
    background-color: ${colorPalette.fifth};
    box-shadow: 3px 3px 3px grey;
`

const MiddleText2 = styled.p`
    margin-left: 20px;
    max-width : 400px;
    border-radius : 20px;
    padding : 20px;
    font-weight: bolder;
    transition: 0.4s;
`


const MidDiv = styled.div`
    display : flex;
    justify-content: center;
    margin : auto; 
    height : 200px;
    transition : 0.6s;
    
`

const MiddleText = styled.p`
    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
    max-width : 400px;
    border-radius : 20px;
    padding : 20px;
    margin: auto;
    box-shadow : 2px 2px 3px grey;
    font-weight: bolder;
    transition: 0.4s;
    &:hover{
      transform: scale(1.1);
    }
    

`
const StyledButton = styled.button`
  width : 100%;
  height : 70px;
  background-color : ${colorPalette.fifth};
  font-family: 'Outfit', sans-serif;
  transition : 0.1s;
  font-weight: bold;
  text-align: center;
  border: none;
  padding : 0 30px 0 30px;
  &:hover{
    border-bottom : 2px grey solid;
  }
`
const ApiCat = styled.img`

    z-index : 2;
    align-self: center;
    width: 300px;
    background-color :  ${colorPalette.fifth};
    height : 180px;
    border-radius : 10px;
    box-shadow : 3px 3px 2px grey;
`

