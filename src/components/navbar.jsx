import CartWidget from "./cartwidget"; 


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <a href=""><h1>Mi Tienda</h1></a>
      </div>
      <ul className="navbar__categories">
        <li><a href="#categoria1">Remeras</a></li>
        <li><a href="#categoria2">Pantalones</a></li>
        <li><a href="#categoria3">Busos</a></li>
        <li><a href="#categoria4">Camperas</a></li>
      </ul>

      <CartWidget/>
    </nav>
  );
}

export default Navbar;
