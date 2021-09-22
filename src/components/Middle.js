import React from 'react';
import interactive from '../images/desktop/image-interactive.jpg';

const Middle = () => {
	return (
		<>
			<div className="container midsection position-relative g-0">
				<img src={interactive} alt="vr" className="" />		
					<div className="middle position-absolute bottom-0 end-0">
						<div className="text-start middleText">
							<h1 className="">The Leader in interactive VR</h1>
							<p className="">
							Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe.
							Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
							</p>
						</div>	
					</div>
				</div>
		</>
	)
}

export default Middle
