import { Link } from "react-router-dom";
import Carousel from "./Carousel";




const Home = () => {
    return (
        <div>
             <div className="text-center text-2xl font-bold mt-10">
                <h2 >Welcome Our Site <Link to='/details'><button  className="btn btn-wide text-xl font-bold bg-green-600" >More Details</button></Link></h2>
            </div>
           <Carousel></Carousel>
           
           
        </div>

    );
};

export default Home;