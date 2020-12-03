import React from "react";
import Contador from "./Contador";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<React.Fragment>
			<Contador />
		</React.Fragment>
	);
}
