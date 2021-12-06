import {useState, useEffect} from 'react';
import styled from 'styled-components'
import {colorPalette} from './Home.jsx'
import { useTransition, animated } from 'react-spring'

export default function PlaygroundPage () {
    
    return <><ButtonAnimate/></>
}

export function ButtonAnimate () {
    const [visible, setVisible] = useState(true)
    const [frames, setFrames] = useState(false)
    const transition = useTransition(visible, {
        from : {position : 'absolute', width : '30%',opacity : 0},
        enter : {width : '50%', opacity : 1},
        leave : { width : '30%', opacity : 0},
        delay : 200,
    })
    const transition2 = useTransition(frames, {
        from : {x : -1000 , y : 800, position : 'relative', opacity : 0},
        enter : () => async (next) => {
           await next({ x : -100, y: 200,opacity : 1, delay: 300, width : '80%', margin : 'auto'});
           await next({ x: 0, y : 170})
        },
        leave : {x : 1000, y: 800, opacity : 0}, 
    })
    const Div2 = styled.div`
        .b{
            background : #bb6432;
            padding : 20px;
            font-weight : bold;
            border: .01px solid #bb6432;
            font-family: 'Outfit', sans-serif;
            border-radius : 20px;
            font-size : 20px;   
        }
        .a {
            border: .01px solid purple;
            padding : 20px;
            font-weight : bold;
            font-family: 'Outfit', sans-serif;
            border-radius : 20px;
            font-size : 20px;
            margin-left : 300px; 
            box-shadow : 2px 2px 2px grey;
            background :linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
        }
    `
    return (
        <Div2>
        {transition((style, item) => item ? <animated.button className="a" style={style} onClick={() => {
            setVisible(!visible)
            setFrames(!frames)
    
        }}>Open Nasa Mars Images Catalog</animated.button> : 
        
        <div>
        <animated.button style={style} onClick={() => {
            setVisible(!visible)
            setFrames(!frames)
        }} className="a">Close Nasa Mars Images Catalog</animated.button>
        </div>)}
        {transition2((style, item) => item && <animated.div className="b" style={style}><NasaAPIGrid/></animated.div> )}
           </Div2>   
        )}




export function NasaAPI () {
    return (
        <>
        <div>
        Hey welcome to the Playground ! Testing API here 0_°
        </div>
        </>
        ) 

}


//  This part is for the Input Buttons testing
//  Testing other API's than Nasa API.

export function InputButton () {
    return
}








































// End of the input buttons test.

function NasaAPIGrid () {
    const [NasaData, setNasaData] = useState()
    useEffect(() => {DataLoad();},[])
    const DataLoad = async () => {
        const result = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=ISamx22cHoGURVyoEBzsQzCbUmbDGLFPeAhFNshm')
        const data = await result.json()
        console.log(data)
        setNasaData(data)
    }
    const StyledImg = styled.img`
    &:hover {
        transform : scale(1.1);
        box-shadow : 2px 2px 6px grey;
    }
    transition : all 0.3s ease-in-out;
    width : 250px;
    height: 150px;
    background-color : linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
    border : 10px ${colorPalette.fifth};
    border-radius : 5px;
    margin : 10px
    `
    const NasaDiv = styled.div`
        display : grid;
        grid-template-columns : 1fr 1fr 1fr 1fr;
    `
    return (
        <NasaDiv>
            { NasaData === undefined ? null : NasaData.photos.map(({name, id, img_src}) => 
                <div>
            <StyledImg src={img_src} alt={id}/>
            </div>
            )}
        </NasaDiv>
    )
}




