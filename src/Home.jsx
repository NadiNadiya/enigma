import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';  
import Navbar from './Navbar';
import avatar from './assets/shiba-avatar.png';

const Home = (props) => {
  const { loggedIn, email } = props;
  const navigate = useNavigate();  
  return (
    <div className="mainContainer">
      <div className={"titleContainer"}>
        <div>Welcome!</div>
      </div>
      <div>This is the home page.</div>
      <img className='avatar' src={avatar} alt="avatar" />
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
