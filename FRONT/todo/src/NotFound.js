import React from 'react'
import './NotFound.css'
import { NavLink } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <div id="error-page">
         <div className="content">
            <h2 className="header" data-text="404">
               404
            </h2>
            <h4 data-text="Opps! Page not found">
               Opps! Page not found
            </h4>
            <p>
               Sorry, the page you're looking for doesn't exist. Go back to Home.
            </p>
            <div className="btns">
            <NavLink to= "/" >
               <a>return home</a>
            </NavLink>
            </div>
         </div>
      </div>
    </div>
  )
}

export default NotFound
