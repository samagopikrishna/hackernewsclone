import React from "react";
import { Link } from "react-router-dom";
const form = () => {
  return (
    <React.Fragment>
      <div style={{ backgroundColor: "" }}>
        <label>
          <b>User Name</b>
        </label>
        <input
          type="text"
          name="Uname"
          id="Uname"
          placeholder="Username"
          required
        />
        <br />
        <br />
        <label>
          <b>Password</b>
        </label>
        <input
          type="Password"
          name="Pass"
          id="Pass"
          placeholder="Password"
          required
        />
        <br /> <br />
        <button>
          <Link to="/home">Login</Link>
        </button>
        <br />
        <br />
      </div>
    </React.Fragment>
  );
};

export default form;
