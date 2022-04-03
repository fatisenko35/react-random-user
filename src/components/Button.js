import React from 'react';
import "../App.css";

const Button = ({getData}) => {
  return (
    <div>
        <button className="btn" onClick={() => getData()}>Random User</button>
    </div>
  )
}

export default Button