import { Link } from "react-router-dom";
import { Div,Path } from "./navBarStyle";
const Nav =()=>{
    return(
            <Div>
        <h1>Los Pollos Hermanos</h1>
        <ul>
            <li>
                <Path to="/">Home</Path>
            </li>
            <li>
                <Path to="/menu">Menu</Path>
            </li>
            <li>
                <Path to="/feedback">Feedback</Path>
            </li>
            <li>
                <Path to="/contact">Contact</Path>
            </li>
        </ul>
    </Div>
    )
}
export default Nav; 