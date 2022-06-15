import { async } from "@firebase/util";
import { useEffect, useState } from "react";
import { getReview,observer,signOuts,signIn } from "../backend/backend";
import { Div  } from "./feedbackStyle";
const Feedback =()=>{
    const [review,setReview] = useState<any[]>([])
    const [user,setUserin] = useState<any>()

    useEffect(()=>{
        getReviewList();
        observer();

    },[])

    const getReviewList = async()=>{
        const data = await getReview();
        setReview(data);
    }
    const getuserinfo =()=>{
        const signindetail =  signIn();
        setUserin(signindetail);
        console.log(user);
    }

    return(
        <Div>
            <div className="add">
                <h2>Add Feedback</h2>
                <p>if your already visited our restaurunt kindly add your expirence at los pollos hermanos.</p>
                <button onClick={getuserinfo}>Add</button>
                <button onClick={signOuts}>leave</button>
                {/*   <p>{user}</p> */}

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