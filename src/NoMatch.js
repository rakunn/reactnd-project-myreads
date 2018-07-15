import React from 'react';
import { Link } from 'react-router-dom'

const NoMatch = () => {
  return (
    <div className="not-found">
      <h2>404</h2>
      <h3>Page Not Found</h3>
      <p>It seems, that you entered wrong link! Click <Link to={process.env.PUBLIC_URL}>here</Link> to return to home page.</p>
    </div>
  )
};

export default NoMatch;