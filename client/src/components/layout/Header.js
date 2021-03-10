import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import { types } from "../../context/auth/types";

export default function Header() {

  const {user, dispatch} = useContext(AuthContext)
  const {name} = user


  const history = useHistory()

  const exitUser = () => {
    dispatch({
      type: types.LOGOUT
    })
    history.replace('/login')
  }

  return (
    <nav className="bg-blueGray-900">
      <div className="flex justify-between px-8 h-16">
        <ul className="flex items-center space-x-4">
          <Link
            to="/"
            className="text-indigo-300 font-bold text-lg hover:text-indigo-500 "
          >
            Home
          </Link>
          <Link
            to="/login"
            className="text-indigo-300 text-lg hover:text-indigo-500 "
          >
            Login
          </Link >
          <Link
            to="/marvel"
            className="text-indigo-300 text-lg hover:text-indigo-500 "
          >
            Marvel
          </Link>
          <Link  to='/dc' className="text-indigo-300 text-lg hover:text-indigo-500 ">
            DC
          </Link>
          <Link  to='/search' className="text-indigo-300 text-lg hover:text-indigo-500 ">
            Search
          </Link>
        </ul>

        <ul className="flex items-center space-x-4">
          <span className="text-green-600 font-bold text-lg hover:text-indigo-500 ">
              {name}
          </span>
          <button className="text-indigo-300 font-bold text-lg hover:text-indigo-500 "
          type='button'
          onClick={exitUser}
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
}
