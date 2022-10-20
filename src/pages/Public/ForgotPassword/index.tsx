import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
  return (
    <div>
      <input type="text" placeholder="Enter User ID" />
      <br />
      <button>Next</button>
      <p>
        if you dont know your user id then click here to go to <Link to="/">Home Page</Link>
      </p>
    </div>
  );
};
export default ForgotPassword;
