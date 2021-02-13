import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import "./Profile.css";

function Profile() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" />
          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className='plan_info'>
                <h2>Plans (Current Plan : premium)</h2>
                <h3>Renewable date : 04/05/2021</h3>
                <div className='avail_plan'>
                  <div className='plan'>
                      <div>
                          <p>Netflix Standard</p>
                          <p>1080p</p>
                      </div>
                      <button>Subscribe</button>
                  </div>
                   <div className='plan'>
                      <div>
                          <p>Netflix Basic</p>
                          <p>480p</p>
                      </div>
                      <button>Subscribe</button>
                  </div>
                   <div className='plan'>
                      <div>
                          <p>Netflix Premium</p>
                          <p>4k+HDR</p>
                      </div>
                      <button id='curr_plan'>Current Plan</button>
                  </div>
                </div>
            </div>
            <div className="profileScreen_plans">
              <button
                onClick={() => auth.signOut()}
                className="profileScreen_signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
