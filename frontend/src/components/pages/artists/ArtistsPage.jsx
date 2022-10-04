import React from "react";
import "./artists-page.scss";

class ArtistsPage extends React.Component {
	constructor(props) {
		super(props);
		this.block_name = "b-artists-page";
	}

	render() {
		return (
			<div className={ `${this.block_name}` }>
				Artists
			</div>
		);
	}
}

export default ArtistsPage;