import styled from "styled-components";
export const Main = styled.div`
display: grid;
color: #eee;
grid-template-columns: repeat(2,1fr);
gap:3rem;
margin:0;
padding:3rem;
background-color: rgba(0, 0, 0, 0.6);
font-family: 'Montserrat', sans-serif;

@media only screen and (max-width:768px){
    grid-template-columns: repeat(1,0.8fr);
    padding:1.5rem;
}  
`;
export const Div = styled.div`
display: flex;
// flex-direction: column;
background-color: rgba(0, 0, 0, 0.6);
padding:2rem;
cursor: pointer;

img{ 
    width:15rem;
    heigth:auto;
    object-fit:contain;
    padding-right:1rem;
}
h2{
    margin-bottom:10px;
}
p{
    text-transform: uppercase;
    letter-spacing: 2px;

}
&:hover{
    background-color: rgba(99, 99, 99, 0.4);
}
@media only screen and (max-width:768px){
    padding:1rem;
    img{ 
        width:10rem;}
} 
`;