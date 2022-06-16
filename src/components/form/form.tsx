import { useState } from "react"
import { addReview } from "../backend/backend";
const Form =()=>{

    const [getValue,setGetValue] = useState({
        name:"",
        reviews:"",
        date:""
    })
    const handleSubmit =(e:any)=>{
        e.preventDefault();
        if(getValue.name && getValue.reviews && getValue.date){
            addReview(getValue.name,getValue.reviews,getValue.date);
        }
    }
    const updateChar =(obj:any)=>{
        setGetValue({...getValue, ...obj});
        console.log(getValue);
    };
    const handleChange =(e:any)=>{
        const objName =  e.target.name;
        const value = e.target.value;
        updateChar({ [objName]:value});
    }
return(
    <div>
        <form onSubmit={handleSubmit}>
            <p>Please enter your name and date along with your feedback</p>
            <p>Feedback from customers helps us to improve our service ,So please kindly give your genuine feedback about us.</p>

            <input 
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Enter your name"
            />
            <input
            onChange={handleChange}
            name="reviews"
            type="text"
            placeholder="Enter your review"
            />
            <input
            onChange={handleChange}
            name="date"
            type="date"
            />
            <button>submit</button>
        </form>
    </div>
)
}
export default Form;