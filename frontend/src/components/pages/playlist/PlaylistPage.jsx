import React from "react";
import "./playlist-page.scss";

class PlaylistPage extends React.Component {
	constructor(props) {
		super(props);
		this.block_name = "b-playlist-page";
	}

	render() {
		return (
			<div className={ `${this.block_name}` }>
				Account
			</div>
		);
	}
}

export default PlaylistPage;