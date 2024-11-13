import { Link, useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import { auth, db } from "../Firebase/Firebase";
import myContext from "../context/myContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, onSnapshot, query, QuerySnapshot, where } from "firebase/firestore";

function Login() {

  const context = useContext(myContext);
  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);
      try {
        const q = query(collection(db, "user"), where('uid', '==', users?.user?.uid));
        const data = onSnapshot(q, (QuerySnapshot) => {
          let user;
          QuerySnapshot.forEach((doc) => user = doc.data());
          localStorage.setItem("users", JSON.stringify(user))
          setUserLogin({
            email: "",
            password: ""
          })
          if (user.role == "user") {
            navigate('/');
          }
          else {
            navigate('/admin');
          }
        }
        );
        return () => data;
      } catch (error) {
        console.log(error);
      }
      console.log("User logged in Successfully");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link to='/'>
            <img
              alt="Your Company"
              src="/src/assets/react.svg"
              className="mx-auto h-10 w-auto"
            />
          </Link>
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} method="POST" className="space-y-6">
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
                  value={userLogin.email}
                  onChange={(e) => {
                    setUserLogin({
                      ...userLogin,
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
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  onChange={(e) => {
                    setUserLogin({
                      ...userLogin,
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
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?{' '}
            <Link to="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login;