import Link from 'next/link';
import logo from '../static/images/logo.png'

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"><img src={logo} width="50%"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item dropdown mr-3">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Use cases
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
      </div>
    </li>
      <li className="nav-item mr-3">
        <a className="nav-link" href="#">Templates</a>
      </li>
      <li className="nav-item mr-3">
        <a className="nav-link" href="#">Integrations</a>
      </li>
      <li className="nav-item mr-3">
        <a className="nav-link" href="#">Docs</a>
      </li>
      <li className="nav-item mr-3">
        <a className="nav-link" href="#">FAQ</a>
      </li>
      <li className="nav-item mr-3">
        <a className="nav-link" href="#">Pricing</a>
      </li>
      <li className="nav-item mr-3">
        <a className="nav-link" href="#">Blog</a>
      </li>
      <li className="nav-item mr-3">
        <a className="nav-link" href="#">Login</a>
      </li>
      <form className="form-inline">
        <button className="btn btn-sm btn-primary" type="button">SIGN UP FREE</button>
      </form>
    </ul>
  </div>
</nav>
);

export default Navbar;
