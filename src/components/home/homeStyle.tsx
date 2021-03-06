import styled from "styled-components";
import img from '../assets/homeBg/homebb.jpg';

export const Div = styled.div`
color: #eee;
max-width: 700px;
margin: auto;
font-size: 2rem;
background-color: rgba(0, 0, 0, 0.6);
border: 1px solid #222;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: auto;
width: auto;
padding:2rem;
margin-top:1rem;
margin-bottom: 25px;

animation: fadeIn 1.5s;
img{
    width:20rem;
    heigth:auto;
    object-fit:contain;
    padding-right:1rem;
}
h3{
    margin-bottom:5px;
}
p{
    font-size:20px;
}
@media only screen and (max-width:768px){
    max-width:400px;
    p{
        font-size: 15px;

    }
}
`;
export const Contents = styled.div`
display: flex;

@media only screen and (max-width:768px){
flex-direction: column;

img{
    width:20rem;
    heigth:auto;
    object-fit:contain;
    padding-bottom:1.5rem;
    padding-right:0;
}
p{
    line-height: 1.5;
}

}

`;