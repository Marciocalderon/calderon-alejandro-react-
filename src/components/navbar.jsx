import CartWidget from "./cartwidget"; 
import { Link } from "react-router-dom";



function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <Link to='/' style={{textDecoration:'none'}}><h1>Tienda Frodito</h1></Link>
      </div>
      <ul className="navbar__categories">
        <Link className="link_navBar" to='/category/laptops' style={{textDecoration:'none'}}>Laptops</Link>
        <Link className="link_navBar" to='/category/smartphones' style={{textDecoration:'none'}}>Celulares</Link>
        <Link className="link_navBar" to='/category/motorcycle' style={{textDecoration:'none'}}>Motos</Link>
      </ul>

      <CartWidget/>
    </nav>
  );
}

export default Navbar;
