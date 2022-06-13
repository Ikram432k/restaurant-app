import { Div,Contents } from "./homeStyle";
import img from '../assets/homeBg/homebb.jpg';


const Home =()=>{



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