import React from "react";
import './css/style.css';
import { Link } from "react-router-dom";
import  {FiPlus}  from "react-icons/fi";
function Header() {

  return (
    <div className="header">
      <h1>NOTES</h1>
      <Link to='addnewnote/'><FiPlus className="plus-icone" /></Link>
    </div>
  );
}

export default Header;
