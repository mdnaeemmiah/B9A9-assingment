import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Nav = () => {
    const { logOut, user } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/Register'>Register</NavLink></li>
        <li><NavLink to='/order'>Orders</NavLink></li>
        {
            user && <>
                <li><NavLink to='/profile'>Profile</NavLink></li>
                <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
            </>
        }
    </>
    return (
        <div className="navbar bg-base-100 shadow-xl fixed z-10 max-w-7xl mx-auto">
            <div className="navbar-start">

                <a className="btn btn-ghost text-2xl font-extrabold">Industrial</a>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 gap-2 font-bold">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        {user.email}
                        <a onClick={handleLogOut} className="btn bg-red-700">Log Out</a>
                    </> : <Link to='/login' className="btn bg-green-600">Login</Link>
                }

            </div>
        </div>
    );
};

export default Nav;