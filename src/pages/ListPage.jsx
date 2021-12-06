import styled from 'styled-components'
import { useState } from 'react';
import {Data1} from '../data/apidocelement.js'

function ListPage () {

    const [Open, setOpen] = useState(false);
    const MiddleText = styled.div`
       
    padding : 10px;
    transition : 0.3s;
    text-align : center;
    border-radius: 15px;
    box-shadow : 2px 2px 2px grey;
    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
    width : 50%;
    margin : auto;
    margin-bottom : 10%;
    li:hover{
        transform : translateY(20%)
    }
    `

const APIListDiv = styled.div`
`


        return (
        Open === true ? 
        <div>            
            <MiddleText onClick={() => setOpen(false)}>
                Close catalog
            </MiddleText>
            <Item/>
            <APIListDiv>
                
            </APIListDiv>
        </div>
        :
            <MiddleText onClick={() => setOpen(true)}>
                Open Catalog
            </MiddleText>
        )

}
const Div = styled.div`
    
      li {
        transition : 0.3s ease-out;
        display : flex;
        flex-direction: column;
        flex-wrap: wrap;
        border-radius: 15px;
        box-shadow : 2px 2px 2px grey;
        padding: 20px;
        width : 50%;
        margin-top : 10px;
        margin-left : 10%;
        background-color : #c5cfba;
        margin: 10px;
    }
    li:hover {
        transform: translateX(20%);
    }
    li img {
        border-radius : 5px;
        box-shadow : 2px 2px 2px grey;
    }
    .li-expand {
        max-height : 1200px;
        overflow : auto;
    }
`


function Item () {
    const [itemOpened, openItem] = useState(false)
    return (
    <ul>
        <Div>
            {Data1.map(({id , name, des, img, full}) => 
            
        {
                    return itemOpened === false ?

                        <li onClick={() => openItem(true)}>
                            <p>Index: {id}</p>
                            <p>Name: {name}</p>
                            <p>Description: {des}</p>
                            
                        </li>

                        :

                        <li className="li-expand" onClick={() => openItem(false)}>
                            <img src={img} alt={id} />
                            <p> Index: {id}</p>
                            <p>Name: {name}</p>
                            <p>{full}</p>
                        </li>;
                }
        )} 
        </Div>
        </ul>)
}
export default ListPage;