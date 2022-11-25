import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loader from '../../Common/Loader';
import { saveUserToDB } from '../../Common/UserData';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {

    const { login, resetPassword, signInWithGoogle, loading, setLoading } = useContext(AuthContext);
    const [userEmail, setUserEmail] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogIn = e => {
        e.preventDefault();
        setLoading(true);

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setUserEmail(email);

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const loggedInUser = {
                    name: user.displayName,
                    email: user.email,
                }
                saveUserToDB(loggedInUser);
                toast.success(`welcome back ${user.displayName}`);
                form.reset();
                setLoading(false);
                navigate(from, {replace: true});
            })
            .catch(error => {
                toast.error(error.message);
                setLoading(false);
            })
    }

    const handleResetPassword = () => {
        resetPassword(userEmail)
        .then(() => {
            toast.success(`Check ${userEmail} for password reset link`, {duration: 3000});
        })
        .catch(error => {
            toast.error(error.message);
        })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user
                // console.log(user);
                const createdUserByGoogle = {
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                    status: 'user'
                }
                saveUserToDB(createdUserByGoogle)
                setLoading(false)
                navigate(from, {replace: true})
            })
            .catch(error => {
                toast.error(error.message, { duration: 3000 });
                setLoading(false)
            })
    }

    return (
        <section className="h-screen">
            <div className="px-6 h-full text-gray-800">
                <div
                    className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                >
                    <div
                        className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                    >
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="w-full"
                            alt=""
                        />
                    </div>
                    <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                        <form onSubmit={handleLogIn}>
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-2xl mb-4 text-blue-500 font-semibold">Sign in with</p>
                                <button
                                    onClick={handleGoogleSignIn}
                                    type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-12 h-4">
                                        <path
                                            fill="currentColor"
                                            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                                        />
                                    </svg>
                                </button>
                            </div>

                            <div
                                className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                            >
                                <p className="text-center font-semibold mx-4 mb-0">Or</p>
                            </div>
                            <div className="mb-6">
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"

                                    placeholder="Email Address"
                                />
                            </div>
                            <div className="mb-6">
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"

                                    placeholder="Password"
                                />
                            </div>

                            <div className="flex justify-end items-center mb-6">
                                <button onClick={handleResetPassword} className="text-gray-800">Forgot password?</button>
                            </div>

                            <div className="text-center lg:text-left">
                                <button
                                    type="submit"
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                >
                                    {loading ? <Loader /> : 'Login'}
                                </button>
                                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                    Don't have an account?
                                    <Link
                                        to="/sign-up"
                                        className="ml-2 text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                    >
                                        Register
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;