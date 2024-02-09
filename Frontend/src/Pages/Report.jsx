import React from "react";
import Divider from "@mui/material/Divider";
const Report = () => {
  return (
    <div className="report">
      <div className="profile">
        <div className="circle" />
        <h3>collabadd</h3>
        <p>@username</p>
        <Divider />
        <h4>Engagement Rate</h4>
        <h2>50%</h2>
      </div>
      <div className="insights">
        <div className="first-div">
          <h4>collabadda's Instagram statistics</h4>
        </div>
        <div className="first-div">
          <div>FOLLOWERS<span> 1.2K</span></div>
          <div>FOLLOWING <span>78</span></div>
          <div>POST <span>59</span></div>
          <div>AVG. LIKES <span>83.6</span></div>
        </div>
        
        <div className="first-div">
        <div>  AVG. COMMENTS <span> 1.9K</span></div>
          <div>ENG. RATE  <span>8.06%</span></div>
          <div>EST. EARNING <span>$6.9</span></div>
          <div>FRAUD SCORE <span>9%</span></div>
        </div>
        <div className="first-div"></div>
      </div>
    </div>
  );
};

export default Report;
