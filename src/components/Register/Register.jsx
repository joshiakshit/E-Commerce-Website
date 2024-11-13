import { Link, useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import myContext from "../context/myContext";
import { auth, db } from "../Firebase/Firebase";
import { Timestamp, doc, addDoc, collection } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const context = useContext(myContext);
  const navigate = useNavigate();
  //user sign up
  const [userSignup, setUserSignup] = useState({
    email: "",
    password: "",
    role: "user"
  })

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);
      const user = {
        email: users.user.email,
        uid: users.user.uid,
        role: userSignup.role,
        time: Timestamp.now(),
        date: new Date().toLocaleDateString("en-US",
          {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }
        )
      }
      const userReference = collection(db, "user")
      addDoc(userReference, user);

      setUserSignup({
        email: "",
        password: ""
      })
      if (user) {
        console.log("User Registered Successfully!!")
        toast.success("User registered successfully!");
      }
      setTimeout(() => {
        // Navigate to another page after the delay
        navigate('/login');
      }, 7000); // 3000 ms = 3 seconds
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link to="/">
            <img
              alt="Your Company"
              src="/src/assets/react.svg"
              className="mx-auto h-10 w-auto"
            />
          </Link>
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Register with us
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleRegister} method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  value={userSignup.email}
                  onChange={(e) => {
                    setUserSignup({
                      ...userSignup,
                      email: e.target.value
                    })
                  }}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  value={userSignup.password}
                  onChange={(e) => {
                    setUserSignup({
                      ...userSignup,
                      password: e.target.value
                    })
                  }}

                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="passwordConfirm"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  value={userSignup.password}
                  onChange={(e) => {
                    setUserSignup({
                      ...userSignup,
                      password: e.target.value
                    })
                  }}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Already a member?{' '}
            <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
export default Register;