import styled from "styled-components";
export const Div = styled.div`
display: flex;
// flex-direction: column;
align-items: center;
justify-content: center;
// height: 525px;
// // width: 618px;
// max-width: 700px;
padding: 4rem;
font-size: 2rem;
background-color: rgba(0, 0, 0, 0.6);
border: 1px solid #222;
gap:2rem;
h2{
    font-family: 'Montserrat', sans-serif;
    color:white;

}
.add{
    color:white;
    h2{
        border-bottom:2px solid black;
        letter-spacing: 1.5px;

    }
}
button{
    cursor: pointer;
    text-transform: uppercase;
    border:0;
    color:white;
    margin-top:15px;
    background-color:black;
    padding:8px 10px;
    font-size:25px;
    letter-spacing: 1.5px;
    transition: 0.5s;
    border:0.5px solid black;
    &:hover{
        background-color:white;
        color:black;
    }
}
.reviewList{
    background-color: rgba(0, 0, 0, 0.6);

}
.list{
    background-color: rgba(99, 99, 99, 0.4);
    margin:auto;
    width: 40rem;
    height: 20rem;
    padding: 1rem;
    overflow: auto;
    cursor: pointer;

    border-bottom:2px solid black;

    &::-webkit-scrollbar {
        width: 1vw;
      }
      &::-webkit-scrollbar-track {
        background-color: #5555;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #7775;
      }
      h4{
        margin:0;
      }
      p{
        margin-top:10px;
      }
    }
    .details{
        border-bottom:2px solid black;
        margin-top:10px;
        padding-bottom:10px;

    }
    @media only screen and (max-width:768px){
        flex-direction: column;
        gap:5rem;
        .reviewList{
            h2{
                font-size:50px;
  
            }
        }
        .list{
            width: 25rem;  
        }
        .add{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: rgba(99, 99, 99, 0.4);
            padding:15px;
        }
    } 
`;
