import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import Loader from '../../Common/Loader';
import { AuthContext } from '../../Contexts/AuthProvider';

const Register = () => {

    const { createUser, signInWithGoogle, updateUserProfile, loading, setLoading } = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();

        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const image = form.image.files[0]
        const status = form.status.value
        const password = form.password.value

        const formData = new FormData();
        formData.append('image', image);

        fetch('https://api.imgbb.com/1/upload?key=f3205625c23b2db3a03e7605eb7073a8', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                const photo = imageData.data.display_url;

                createUser(email, password)
                    .then(result => {
                        const user = result.user;
                        console.log(user);

                        updateUserProfile(name, photo)
                            .then(() => {
                                toast.success('signup and name, image updated successfully', { duration: 3000 });
                                form.reset();
                                setLoading(false)
                            })
                            .catch(error => {
                                toast.error(error.message, { duration: 3000 })
                                setLoading(false)
                            })
                    })
                    .catch(error => {
                        toast.error(error.message, { duration: 3000 });
                        setLoading(false)
                    })
            })
            .catch(error => {
                toast.error(error.message, { duration: 3000 });
                setLoading(false)
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            const user = result.user
            console.log(user);
            setLoading(false)
        })
        .catch(error => {
            toast.error(error.message, {duration: 3000});
            setLoading(false)
        })
    }

    return (
        <section className="h-screen">
            <h2 className='text-2xl font-semibold text-primary text-center mb-5'>Please Register Your Account</h2>
            <div className="container px-6 py-12 h-full">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="w-full" alt="" />
                    </div>
                    <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                        <form className='mt-5 lg:mt-0' onSubmit={handleSignUp}>
                            <div className="mb-6">
                                <input
                                    type="text"
                                    name='name'
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <input
                                    type="email"
                                    name='email'
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Email address"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <input
                                    type="file"
                                    name='image'
                                    accept='image/*'
                                    className="file-input file-input-bordered w-full"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <select
                                    name='status'
                                    required
                                    className="select form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                >
                                    <option>user</option>
                                    <option>seller</option>
                                </select>
                            </div>
                            <div className="mb-6">
                                <input
                                    type="password"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Password"
                                    name='password'
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                {loading ? <Loader /> : 'Sign Up'}
                            </button>

                            <div
                                className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                            >
                                <p className="text-center font-semibold mx-4 mb-0">OR</p>
                            </div>
                            <button
                                onClick={handleGoogleSignIn}
                                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                {loading ? <Loader /> : 'Google Sign In'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;