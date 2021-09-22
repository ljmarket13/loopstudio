import React from 'react';
import CreationsGrid from './CreationsGrid';



const Creations = () => {

	return (
		<>
			<section className="container position-relative creationsGrid">
				
					<div className="d-flex justify-content-between">
						<h1>OUR CREATIONS</h1>
							<button type="button" className="btn btn-outline-dark position-absolute top-0 end-0">SEE ALL</button>
					</div>
					<CreationsGrid />

			</section>
		</>
	)
}

export default Creations
