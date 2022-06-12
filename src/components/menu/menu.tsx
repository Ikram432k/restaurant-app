
import {useState,useEffect, Key} from 'react';

const Menu =()=>{
    useEffect(()=>{
        fetchItems();
        console.log(items);

    },[]);
    
    const[items,setItems] =useState<any[]>([]);;
    
    const fetchItems = async()=>{
        try{
        const data = await fetch('https://api.spoonacular.com/recipes/random?apiKey=3198439cd8504af6b112083658cc9fbe&number=1&tags=vegetarian')
        const items =  await data.json();
        setItems(items);
        }
        catch(error){
            alert('error occured')
        }
    }
    return(
        <div>
            {/* {items.map((item: { id: number ; image: string | undefined; title:string; price:number; })=>(
                <div className='' key={item.id}>
                    <div className='imgdiv'>
                        <img src={item.image} alt={item.title} />
                    </div>
                     <div className='detail' > 
                    <p>{item.title}</p>
                    <p>price: {item.price} $</p>
                    </div>
 
                </div>
            ))} */}
        </div>
    )
}
export default Menu;
// img{
//     width:15rem;
//     heigth:auto;
//     object-fit:contain;
//     padding-right:1rem;
// }