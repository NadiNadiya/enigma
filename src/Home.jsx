import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';  
import Navbar from './Navbar';

const Home = (props) => {
  const { loggedIn, email } = props;
  const navigate = useNavigate();  
  return (
    <div className="mainContainer">
      <div className={"titleContainer"}>
        <div>Welcome!</div>
      </div>
      <div>This is the home page.</div>
      <div className={"buttonContainer"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={() => navigate(loggedIn ? "/" : "/login")}
          value={loggedIn ? "Log out" : "Log in"}
        />
        {loggedIn ? <div>Your email address is {email}</div> : <div />}
      </div>

      <Outlet />
    </div>
  );
};

export default Home;
