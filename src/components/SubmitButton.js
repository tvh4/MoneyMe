import React from 'react';
//import { Routes, Route, useNavigate } from "react-router-dom";
//import Page2 from './page2.js';

// import PropTypes from 'prop-types';

// submitButton.propTypes = {

// };

function submitButton(props) {

  //const navigate = useNavigate;


  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <button /*onClick={() => navigate("/page2")}*/>
        Submit
      </button>
    </div>
  );
}
export default submitButton;