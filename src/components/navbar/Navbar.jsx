import React from "react";
//import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  
  const [active, setActive] = useState(false);



  return (
    <div className={active ? "navbaractive" : "navbar"}>
      <div className='container'>
          <div className='logo'>
           { /*<link to="/"> */ }
              <span className='text'>KAYFAN</span>
             {/* </link> */}
            </div> 
           <div className='links'>
             
             <span>Sign In</span>
             <span>Become A Seller</span>
             <button>Join</button>
            </div>
            
          </div>
  {active && (
        <>
          <hr />
           <div className="menu">
              <span>test</span>
              <span>test2</span>
              <span>test3</span>
              <span>test4</span>
        </div>
       </>
  )}
    </div>
  );
};

export default Navbar

