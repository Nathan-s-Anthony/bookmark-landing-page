import React from "react";
import "../css/signup.scss";
import Button from "./Buttons";
const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-content">
        <h3>35,000 + ALREADY JOINED</h3>
        <h2>
          Stay up-to-date with what <br></br>we're doing
        </h2>
        <div className="signup-form">
          <form method="POST">
            <div className="email-container">
              <input
                type="text"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="button-container">
              <Button text="Contact Us" styleName="btn-secondary-nav" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
