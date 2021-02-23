import React from "react";
import propTypes from "prop-types";
import ReactDOM from "react-dom";

const Contador = props => {
	return (
		<React.Fragment>
			<div className="bigCounter">
				<div className="calendar">
					<i className="far fa-clock" />
				</div>
				<div className="four">{props.digitFour}</div>
				<div className="three">{props.digitThree}</div>
				<div className="two">{props.digitTwo}</div>
				<div className="one">{props.digitOne}</div>
			</div>
		</React.Fragment>
	);
};

Contador.propTypes = {
	digitFour: propTypes.number,
	digitThree: propTypes.number,
	digitTwo: propTypes.number,
	digitOne: propTypes.number
};

let counter = 0;
setInterval(function() {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);

	ReactDOM.render(
		<Contador
			digitFour={four}
			digitThree={three}
			digitTwo={two}
			digitOne={one}
		/>,
		document.querySelector("#app")
	);
	counter++;
}, 1000);
