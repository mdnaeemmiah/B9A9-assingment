import { Outlet } from 'react-router-dom';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="h-16 ">
                <Nav></Nav>
            </div>
            <div className=" min-h-[calc(100vh-270px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;