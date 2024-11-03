import { NavLink } from "react-router-dom";
import './nav.css'

const Nav = () => {
    return (
        <div className="navbar  fixed z-1000  top-0 bg-base-100">
  <div className="flex-1">
    <a className=" text-xl">COFFEE_BOOK</a>
  </div>
  <div className="flex-none">
    <ul  className="menu gap-5 menu-horizontal px-1">
      <NavLink to='/' >Home</NavLink>
      <NavLink to='coffees'>Coffees</NavLink>
      <NavLink to='dashbord' >DashBord</NavLink>
     
    </ul>
  </div>
</div>
    );
};

export default Nav;