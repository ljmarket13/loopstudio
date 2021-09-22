import logo from '../images/logo.svg';
import hero from '../images/desktop/image-hero.jpg';

 const Header = () => {
	return (
			<div className="banner position-relative">
				<div className=" position-absolute top-50 start-0 translate-middle-y bannerText">
					<h1 className="text-start p-5">Immersive Experiances That Deliver</h1>
				</div>
				<nav className="navbar navbar-dark pt-5 ">
				  <div className="container">
				    <a className="navbar-brand" href="#">
				      <img src={logo} />
				    </a>
						<ul className="nav justify-content-end">
						  <li className="nav-item">
						    <a className="active header" href="#">About</a>
						  </li>
						  <li className="nav-item">
						    <a className="header" href="#">Career</a>
						  </li>
						  <li className="nav-item">
						    <a className="header" href="#">Events</a>
						  </li>
						  <li className="nav-item">
						    <a className="header" href="#">Products</a>
						  </li>
							<li className="nav-item">
						    <a className="header" href="#">Support</a>
						  </li>
						</ul>
				  </div>
				</nav>
			</div>
	)
}

export default Header