import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import instagram from '../images/icon-instagram.svg';
import pintrest from '../images/icon-pinterest.svg';
import footerlogo from '../images/logo.svg';

const Footer = () => {
	return (
		<>
			<footer className="bg-dark g-0 footer mt-5">
				<div className="container">
					<div className="d-flex justify-content-between col">
						<a className="" href="#">
						  <img src={footerlogo} className="" />
						</a>
							<div className="">
								<ul className="d-flex">
									<li className="mx-3"><img src={facebook} /></li>				
									<li className="mx-3"><img src={twitter} /></li>			
									<li className="mx-3"><img src={instagram} /></li>				
									<li className="mx-3"><img src={pintrest} /></li>
								</ul>
							</div>										
					</div>
					<div className="d-flex justify-content-between col">
						<ul className="d-flex p-0">
					  	<li className="">
					  	  <a className="header" href="#">About</a>
					  	</li>
					  	<li className="">
					  	  <a className="header" href="#">Career</a>
					  	</li>
					  	<li className="">
					  	  <a className="header" href="#">Events</a>
					  	</li>
					  	<li className="">
					  	  <a className="header" href="#">Products</a>
					  	</li>
							<li className="">
					  	  <a className="header" href="#">Support</a>
					  	</li>	
						</ul>
						<p className="text-light">@ 2021 Loopstudio. All rights reserved.</p>		
					</div>						
				</div>

			</footer>
		</>
	)
}

export default Footer
