import styled from 'styled-components'
import { useState } from 'react';
import {Data1} from '../data/apidocelement.js'
import { colorPalette } from './Home.jsx';

function ListPage () {

    const [Open, setOpen] = useState(false);
    const MiddleTextClose = styled.div`
       
    padding : 10px;
    transition : 0.3s;
    text-align : center;
    border-radius: 15px;
    box-shadow : 2px 2px 2px grey;
    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
    width : 50%;
    margin : auto;
    `
    const MiddleTextOpen = styled.div`
    padding : 10px;
    transition : 0.3s;
    text-align : center;
    border-radius: 15px;
    box-shadow : 2px 2px 2px grey;
    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
    width : 70%;
    margin : auto;
    margin-bottom: 1%;
`

const APIListDiv = styled.div`
    display : flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color : ${colorPalette.fifth};
    border-radius: 15px;
    box-shadow : 2px 2px 2px grey;
    padding: 20px;
    width : 50%;
    margin-left : 10%;
    transition : 0.3s;
    &:hover {
        transform: translateX(20%);
    }
`

        return (
        Open === true ? 
        <div>            
            <MiddleTextOpen>
                <p>Close catalog <button onClick={() => {setOpen(false)}}>Close</button></p>
            </MiddleTextOpen>
            <APIListDiv>
            {Data1.map(({id , name, des}) => 
                <>
           <p>{id}</p> 
           <p>{name}</p>
           <p>{des}</p>
                </>     
        )}
            </APIListDiv>
        </div>
        :
            <MiddleTextClose onClick={() => {setOpen(true)}}>
                <p>
                Open API's catalog</p>
            </MiddleTextClose>
        )

}
export default ListPage;