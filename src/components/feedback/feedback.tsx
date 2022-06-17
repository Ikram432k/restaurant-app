import { useEffect, useState } from "react";
import { addReview,getReview} from "../backend/backend";
import { Div,Form  } from "./feedbackStyle";
const Feedback =()=>{
    const [review,setReview] = useState<any[]>([])
    const [hide,setHide] = useState<boolean>(false)

    useEffect(()=>{
        getReviewList();

    },[])


    const getReviewList = async()=>{
        const data = await getReview();
        setReview(data);
    }
    const showForm =()=>{
        setHide(true);

    }

    const [getValue,setGetValue] = useState({
        name:"",
        reviews:"",
        date:""
    })
    const handleSubmit =(e:any):void=>{
        e.preventDefault();
        if(getValue.name && getValue.reviews && getValue.date){
            addReview(getValue.name,getValue.reviews,getValue.date);
            setHide(false);
        }
        getReviewList();
        setGetValue({ name: "", reviews: "", date: "" })
    }
    const updateChar =(obj:any)=>{
        setGetValue({...getValue, ...obj});
    };
    const handleChange =(e:any)=>{
        const objName =  e.target.name;
        const value = e.target.value;
        updateChar({ [objName]:value});
    }

    return(
        <Div>
            <div className="add">
                <h2>Add Feedback</h2>
                <p>if your already visited our restaurunt kindly add your expirence at los pollos hermanos.</p>
                <button onClick={showForm}>Add</button>
        
            </div>

            <div className="reviewList">
            <Form name="feedform" hide={hide}>
                <div className="formtop">
                {/* <p>Please enter your name and date along with your feedback</p> */}
                <p>Feedback from customers helps us to improve our service ,So please kindly give your genuine feedback about us.</p>
                </div>
                <div className="inputdiv">
                <label htmlFor="name">Name:</label>
                <input 
                    onChange={handleChange}
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                /></div>
                <div className="inputdiv">
                <label htmlFor="review">Review:</label>
                <input
                
                    onChange={handleChange}
                    id="review"
                    name="reviews"
                    type="text"
                    placeholder="Enter your review"
                /></div>
                <div className="inputdiv">
                <label htmlFor="date">Date:</label>
                <input
                    onChange={handleChange}
                    id="date"
                    name="date"
                    type="date"
                />
                </div>
                <div className="btns">
                <button  type="submit"  onClick={handleSubmit}>submit</button>
                </div>

            </Form>

            <div className="list">
            <h2>Feedback from our customers</h2>

            {review.map((obj,i)=>(
                <div key={i} className="details">
                    <h4>{obj.name}</h4>
                    <p>{obj.reviews}</p>
                    <p>{obj.date}</p>
                </div>
            ))}
            </div>
            </div>
        </Div>
    )
}
export default Feedback;