import { async } from "@firebase/util";
import { useEffect, useState } from "react";
import { getReview } from "../backend/backend"
import { Div  } from "./feedbackStyle";
const Feedback =()=>{
    const [review,setReview] = useState<any[]>([])
    useEffect(()=>{
        getReviewList();
    },[])

    const getReviewList = async()=>{
        const data = await getReview();
        setReview(data);
    }

    return(
        <Div>
            <div className="add">
                <h2>Add Feedback</h2>
                <p>if your already visited our restaurunt kindly add your expirence at los pollos hermanos by logging in.</p>
                <button>log in</button>
            </div>
            <div className="reviewList">
            <h2>Feedback from our customers</h2>
            <div className="list">
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