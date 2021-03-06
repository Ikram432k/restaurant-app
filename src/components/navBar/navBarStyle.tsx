import styled from "styled-components";
import { Link } from 'react-router-dom';
export const Div = styled.div`
display: flex;
flex-direction:column;
justify-content: space-between;
align-items: center;
color:  white;
font-size: 1.5rem;
padding: 2rem;
background-color: rgba(0, 0, 0, 0.9);
font-family: 'Montserrat', sans-serif;
    h1{
        line-height: 1.2;
        margin-bottom: 1rem;

    }
    ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style-type: none;
        width: auto;
        padding:0;
        margin:0;
    }
    li{
        border-bottom: 2px solid transparent;
        transition: transform 0.3s;
        cursor: pointer;
        padding:20px 20px 5px 20px;
                &:hover{
            // transform: translateY(+10%);
            border-bottom: 2px solid #eee;

        }
    }
    li.active {
        border-bottom: 2px solid #eee;
    }
    @media only screen and (max-width:768px){
        h1{
            font-size:25px;
        }
        // flex-direction:row;
        // font-size: 1.2rem;
        padding:5px;
        ul{
        }
        li{
            font-size:20px;
            padding:10px;
        }
    }

`;
export const Path = styled(Link)`
text-decoration: none;
color: inherit;

`;
