import styled from "styled-components";
export const Div = styled.div`
display: flex;
// padding:3rem;
margin:auto;
max-width: 700px;
margin: 2rem auto 3rem auto;
font-size: 20px;
// background-color: rgba(0, 0, 0, 0.6);
color:white;
height: auto;
width: auto;
.whole{
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.9);
    padding: 20px 40px;
}
.details{
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom:2rem;
    padding-bottom:1rem;
    border-bottom:2px solid white;
    p{
    }
}
.about{
    display:flex;
    flex-direction: column;
}
img{
    width:40 rem;
    heigth:auto;
    object-fit:contain;
    margin-bottom:1rem;

}
.para{
    font-style: italic;
    line-height: 1.3;

}
.icons{
    display:flex;
    justify-content: center;
    align-items: center;
    padding:5px;
    i{
        margin-right: 10px;
    }
}
@media only screen and (max-width:768px){
    width: 500px;
    font-size: 25px;
    .about{
    img{
        width:25rem;
        heigth:auto;
        object-fit:contain;
        margin-bottom:1rem;

    }
 }
}

`;