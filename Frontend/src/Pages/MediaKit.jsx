import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Report from "./Report";

const MediaKit = () => {
  const [instaUser, setInstaUser] = useState("");
  const navigate=useNavigate();
  const UpdateUser = (e) => {
    setInstaUser(e.target.value);
  };
  const SearchUser = async () => {
    const route = await axios.post(
      `${process.env.REACT_APP_BACKEND_LINK}/instagramUser`,
      { userName: instaUser }
    );
    if (route.status === 200) {
      return navigate('/report')
    }
  };
  return (
    <>
      <section className="hero-section--MediaKit">
        <h1 className="MediaKit-heading">Instagram Profile Report</h1>
        <div className="MediaKit-div">
          <input
            type="text"
            placeholder="Your Profile"
            name="user"
            value={instaUser}
            onChange={UpdateUser}
          />
          <FontAwesomeIcon
            className="MediaKit-Icon"
            icon={faMagnifyingGlass}
            onClick={SearchUser}
          />
        </div>
      </section>
    
    </>
  );
};

export default MediaKit;
