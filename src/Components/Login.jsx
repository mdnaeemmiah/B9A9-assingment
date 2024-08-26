import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Login = () => {
    const { singInUser, setShowPassword, showPassword,registerError,setRegisterError,success,setSuccess } = useContext(AuthContext);


    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
       // set
        setRegisterError('');
        setSuccess('');

        if (password.length < 6) {
            setRegisterError('please fullfil condition');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one upper case longer');
            return;
        }

        // singin
        singInUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('successfully')
            })
            .catch(error => {
                console.log(error);
                setRegisterError(error.message)
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="password"
                                className="input input-bordered"
                                required />
                            <label className="label ">
                                <p className="" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaRegEyeSlash ></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                                    }

                                </p>
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    {
                        registerError && <p className="text-red-700 text-center font-bold">{registerError}</p>
                    }
                    {
                        success && <p className="text-green-500 text-center font-bold">{success}</p>
                    }
                    <p className="p-2 mb-4">Do not have an account!Please <Link to='/register' className="text-blue-700 font-bold">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;