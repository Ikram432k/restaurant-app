import { Div,Contents } from "./homeStyle";
import img from '../assets/homeBg/homebb.jpg';
import {useState,useEffect} from 'react';


const Home =()=>{

    useEffect(()=>{
        fetchItems();
        console.log(items);

    },[]);
    
    const[items,setItems] =useState([]);
    
    const fetchItems = async()=>{
        try{
        const data = await fetch('https://api.spoonacular.com/recipes/random?apiKey=3198439cd8504af6b112083658cc9fbe&number=10')
        const items =  await data.json();
        setItems(items);
        }
        catch(error){
            alert('error occured')
        }
    }

    return(
        <Div>
            <Contents>           
            <img src={img} alt="background_img"/>
            <div>
            <h3>
                Welcome to Los Pollos Hermanos. 
            </h3>
            <p>
                we offer the best chicken in Albuquerque, New Mexico. Dive into Menu section above and check our special recipies
            </p>
            </div>
            </Contents>
            <p>

            </p>
        </Div>
    )
}
export default Home;