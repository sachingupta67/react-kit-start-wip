import React from 'react';
import { Link } from 'react-router-dom';

const Page404: React.FC = () => {
  return (
    <div>
      <h1>Page not found</h1>
      <h3>This URL is not correct</h3>
      <Link to="/">Go to Home page</Link>
    </div>
  );
};

export default Page404;
