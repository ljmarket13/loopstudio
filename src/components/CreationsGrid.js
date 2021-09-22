import deepEarth from '../images/desktop/image-deep-earth.jpg';
import nightArcade from '../images/desktop/image-night-arcade.jpg';
import soccer from '../images/desktop/image-soccer-team.jpg';
import theGrid from '../images/desktop/image-grid.jpg';
import fromUpAbove from '../images/desktop/image-from-above.jpg';
import pocket from '../images/desktop/image-pocket-borealis.jpg';
import curiosity from '../images/desktop/image-curiosity.jpg';
import fisheye from '../images/desktop/image-fisheye.jpg';



const CreationsGrid = () => {
	return (
		<>
			<div class="container gridImg">
  			<div class="row">
  			  <div class="col position-relative">
  			    <img src={deepEarth} alt="earth" />
						<div className="position-absolute bottom-0 start-5 ms-3 mb-2 ">
							<h1 className="lh-2 text-light">DEEP<br />
							EARTH</h1>	
						</div>
  			  </div>
  			  <div class="col position-relative">
  			    <img src={nightArcade} alt="night arcade" />
						<div className="position-absolute bottom-0 start-5 ms-3 mb-2 ">
							<h1 className="lh-2 text-light">NIGHT<br />
							ARCADE</h1>	
						</div>
  			  </div>
  			  <div class="col position-relative">
  			    <img src={soccer} alt="soccer" />
						<div className="position-absolute bottom-0 start-5 ms-3 mb-2 ">
							<h1 className="lh-2 text-light">SOCCER<br />
							TEAM VR</h1>	
						</div>
  			  </div>
					<div class="col position-relative">
  			    <img src={theGrid} alt="the grid" />
						<div className="position-absolute bottom-0 start-5 ms-3 mb-2 ">
							<h1 className="lh-2 text-light">THE<br />
							GRID</h1>	
						</div>
  			  </div>
  			</div>
				<div class="row mt-5">
  			  <div class="col position-relative">
  			    <img src={fromUpAbove} alt="up above" />
						<div className="position-absolute bottom-0 start-5 ms-3 mb-2 ">
							<h1 className="lh-2 text-light">FROM UP<br />
							ABOVE VR</h1>	
						</div>
  			  </div>
  			  <div class="col position-relative">
  			    <img src={pocket} alt="pocket borealis" />
						<div className="position-absolute bottom-0 start-5 ms-3 mb-2 ">
							<h1 className="lh-2 text-light">POCKET<br />
							BOREALIS</h1>	
						</div>
  			  </div>
  			  <div class="col position-relative">
  			    <img src={curiosity} alt="curiosity" />
						<div className="position-absolute bottom-0 start-5 ms-3 mb-2 ">
							<h1 className="lh-2 text-light">THE<br />
							CURIOSITY</h1>	
						</div>
  			  </div>
					<div class="col position-relative">
  			    <img src={fisheye} alt="fisheye" />
						<div className="position-absolute bottom-0 start-5 ms-3 mb-2 ">
							<h1 className="lh-2 text-light">MAKE IT<br />
							FISHEYE</h1>	
						</div>
  			  </div>
  			</div>
			</div>
			
		</>
	)
}

export default CreationsGrid
