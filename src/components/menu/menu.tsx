import { Main,Div } from './menuStyle';
import {useState,useEffect, Key} from 'react';

const Menu =()=>{
    useEffect(()=>{
        fetchItems();

    },[]);
    
    const[itemss,setItems] =useState<any[]>([]);;
    
    const fetchItems = async()=>{
        try{
        const data = await fetch('https://api.spoonacular.com/recipes/random?apiKey=3198439cd8504af6b112083658cc9fbe&number=20')
        const items =  await data.json();
        let dataArray = [];
        for (let x in items){
            dataArray.push(items[x]);
            console.log(dataArray)

        }
        setItems(dataArray[0]);
        }
        catch(error){
            alert('error occured')
        }
    }
    return(
        <Main>
            {itemss.map((obj,i)=>(
                <Div key={i} >
                    <div className='imgdiv'>
                        <img src={obj.image} alt={obj.title} />
                    </div>
                    <div className='detail' > 
                    <h2>{obj.title}</h2>
                    <p>health Score: {obj.healthScore}</p>
                    <p>servings: {obj.servings}</p>
                    <p>price: {Math.round(obj.pricePerServing/10)}$</p>
                    </div>
 
                </Div>
            ))}
        </Main>
    )
}
export default Menu;
// {key={itemss.indexOf(item)}item: { id: number ; healthScore:number; image: string | undefined; title:string; servings:number; pricePerServing:number; }
