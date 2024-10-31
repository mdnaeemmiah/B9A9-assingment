import { Link } from "react-router-dom";
import Carousel from "./Banner";


const Home = () => {
    return (
        <div>
             <div className="text-center text-2xl font-bold mt-10">
                <h2 >Welcome Our Site <Link to='/details'><button  className="btn btn-wide text-xl font-bold bg-green-600" >More Details</button></Link></h2>
            </div>
            {/* <div className="carousel ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co/WcKz9Bf/pexels-pixabay-459728.jpg"
                        className="" />
                        
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co/nwvhWSf/images-2.jpg"
                        className="" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co/6XBBDQq/images-4.jpg"
                        className="" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div> */}
            <Carousel></Carousel>
           
        </div>

    );
};

export default Home;