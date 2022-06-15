import img from "../assets/gusfring.jpg";
import { Div } from "./contactStyles"; 
const Contact =()=>{
    return(
        <Div>
            <div className="whole">
                <div className="details">
                <div className="icons">
                    <i className="material-icons">call</i><p>505-246-6200</p>
                </div>
                <div className="icons">
                    <i className="material-icons">email</i><p> los_pollos_hermanos@gmail.com </p>
                </div>
                <div className="icons">
                    <i className="material-icons">room</i><p>Albuquerque, New Mexico, United States</p>
                </div>
            </div>
            <div className="about">
                <img src={img} alt="gus fring"/>
                <p className="para">
                    Hi i am Gustavo fring .We opened our first Restaurunt at Albuquerque in 1989 ,now we maintain more than 20 restaurunt at 14 different locations. here at our restaurunt The finest ingredients are brought together with love and care, then slow cooked to perfection. Yes, the old ways are still best at Los Pollos Hermanos. But don't take my word for it. One taste, and you'll know.
                </p>
            </div>
            </div>
        </Div>
    )
}
export default Contact;