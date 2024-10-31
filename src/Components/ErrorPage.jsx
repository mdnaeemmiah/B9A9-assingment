import { Link } from 'react-router-dom';
import img from '../assets/images (1).jpg'

const ErrorPage = () => {
    return (
        <>
            <div className='flex justify-center py-8'>
                <img className='h-[700px]' src={img} alt="" />
            </div>
            <Link to='/' className='flex text-center justify-center'>
                <button className='btn bg-orange-500 text-xl text-white '>Back To Home</button>
            </Link>
        </>
    );
};

export default ErrorPage;