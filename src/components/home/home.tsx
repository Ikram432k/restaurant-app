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
                    Los Pollos Hermanos was a fast-food restaurant chain that specialized in fried chicken, operating across the southwestern United States. The name is ungrammatical Spanish for "The Chicken Brothers." Founded by Gustavo Fring and Max Arciniega, the restaurant chain had fourteen locations throughout the southwest and check our special recipies at Menu section above. 
                    </p>
                </div>
            </Contents>
        </Div>
    )
}
export default Home;